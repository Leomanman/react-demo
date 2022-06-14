const path = require('path')
/**
 * createPages 方法用户创建页面
 * Gatsby 在构建应用是会调用这个方法
 * 该方法必须在Gatsby 中调用
 */
async function createPages({actions,graphql}) {
  const { createPage } = actions
  // 获取模板的绝对地址
  // const template = require.resolve('./src/templates/person.js')
  const template = require.resolve('./src/templates/post.js')
  // 获取组件所需要的数据
  // const persons = require('./data/db.json')
  // graphql 是异步的
  const {data} = await graphql(`
  query {
    allMarkdownRemark {
      nodes {
        fields {
          slug
        }
      }
    }
  }  
  `)
  console.log(data)
  // 根据模板创建页面
  // persons.forEach(item => {
  //   createPage({
  //     component: template,
  //     path: `/person/${item.id}`,
  //     context: item
  //   })
  // })

  data.allMarkdownRemark.nodes.forEach(el => {
      createPage({
        component: template,
        path: `/article/${el.fields.slug}`,
        context: {
          slug: el.fields.slug
        }
      })
  });
}

/**
 * onCreateNode 可以 数据源添加新的属性
 *
 */
function onCreateNode({node,actions}) {
  const { createNodeField } = actions
  // 判断当前是否是md文件数据源
  if(node.internal.type === 'MarkdownRemark') {
    // 获取文件名
    const slug = path.basename(node.fileAbsolutePath, '.md');
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
  
}

module.exports = { createPages,onCreateNode }
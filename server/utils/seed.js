let posts = [
    { title: 'my fist post 1', text: 'post content 1' },
    { title: 'my fist post 2', text: 'post content 1' }
]

var createPosts = async(db) => {
  console.log('seeding database...')

  await posts.map((post) => {
    post.slug = post.title.replace(/ /g, '-')
    db.collection('posts').update({ slug: post.slug },
            post, { upsert: true })
  })
}

module.exports = (db) => {
  createPosts(db)
}

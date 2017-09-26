import { expect } from 'chai'
import { sortNewPostsFirstSelector } from './selectors'

describe('Post Selector', () => {
  describe('sortNewPostsFirstSelector', () => {
    it('should sort posts by date', () => {
      const unsortedPosts = {
        posts: [
          {
            id: 1,
            title: 'Iceland Part 1',
            authorId: 'rip21',
            postdate: new Date(2016, 8, 28),
            body: '## Всем привет, это пример поста про Исландию.',
          },
          {
            id: 2,
            title: 'Iceland Part 2',
            authorId: 'rip21',
            postdate: new Date(2016, 8, 29),
            body: '## Всем привет, это пример ВТОРОГО поста про Исландию.',
          },
          {
            id: 3,
            title: 'Krakow',
            authorId: 'rip21',
            postdate: new Date(2016, 8, 25),
            body:
              '## Всем привет, это пример поста про Краков, какой он классный и все такое.',
          },
        ],
      }

      const expectedPosts = sortNewPostsFirstSelector(unsortedPosts)

      expect(unsortedPosts.posts).to.not.eql(expectedPosts)
      expect(expectedPosts[0].id).to.equal(2)
      expect(expectedPosts[1].id).to.equal(1)
      expect(expectedPosts[2].id).to.equal(3)
    })
  })
})

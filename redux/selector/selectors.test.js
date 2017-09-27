import { getSortedByDatePosts } from './posts'

describe('Post Selector', () => {
  describe('getSortedByDatePosts', () => {
    it('should sort posts by date', () => {
      const unsortedPosts = {
        posts: {
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
        },
      }

      const expectedPosts = getSortedByDatePosts(unsortedPosts)

      expect(unsortedPosts.posts).not.toEqual(expectedPosts)
      expect(expectedPosts[0].id).toEqual(2)
      expect(expectedPosts[1].id).toEqual(1)
      expect(expectedPosts[2].id).toEqual(3)
    })
  })
})

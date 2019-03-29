import { generateId, dateFormat, filterBlogs } from './blog-helper';

describe('blog-helper', () => {
    describe('generate-id', () => {
        it('should generate valid hashId', () => {
            const id = generateId({ heading: 'test', body: 'test' });
            expect(id).toBeDefined();
            expect(id.length).toBe(7);
        });
    });

    describe('dateFormat', () => {
        it('should return a expected date format', () => {
            const date = dateFormat(1552151007820);
            expect(date).toBeDefined();
            expect(date).toBe('Mar 9 2019 18:03');
        });
    });

    describe('filterBlogs', () => {
        it('should filter blog based on string search', () => {
            const blogs = [
                {
                    header: 'word1 word2',
                    body: 'word2 word 3'
                },
                {
                    header: 'word3 word 4',
                    body: 'word1 work9'
                },
                {
                    header: 'word6 word7',
                    body: 'word8 word9'
                }
            ];

            const result = blogs.filter(filterBlogs('word1'));
            expect(result.length).toBe(2);
        });

        it('should show all blogs on empty search', () => {
            const blogs = [
                {
                    header: 'word1 word2',
                    body: 'word2 word 3'
                },
                {
                    header: 'word3 word 4',
                    body: 'word1 work9'
                },
                {
                    header: 'word6 word7',
                    body: 'word8 word9'
                }
            ];

            const result = blogs.filter(filterBlogs(''));
            expect(result.length).toBe(3);
        });
    });
});

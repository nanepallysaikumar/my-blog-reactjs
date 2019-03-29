import { blogSchema } from './blog-schema';

describe('blog-schema', () => {
    it('should validate values', () => {
        const input = {
            header: 'test heading',
            body: 'test body'
        };
        return expect(blogSchema.validate(input)).resolves.toBe(input);
    });

    it('should check required properties', () => {
        const input = {};
        return expect(blogSchema.validate(input)).rejects.toMatchSnapshot(
            'blog-schema-required-error'
        );
    });

    it('should validate  minimum length of properties', () => {
        const input = {
            header: 'te',
            body: 'te'
        };
        return expect(blogSchema.validate(input)).rejects.toMatchSnapshot(
            'blog-schema-minimum-error'
        );
    });
});

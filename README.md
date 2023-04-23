# University Information Hub

The University Information Hub is a website that provides comprehensive and reliable information about universities from around the world. Our website features detailed profiles of universities, including their history, culture, academic programs, and notable achievements. We also offer rankings and reviews from students and experts alike, providing valuable insights into the quality of each university.

## Features

- Detailed profiles of universities from around the world
- Rankings based on academic performance, research output, and student satisfaction
- Reviews and ratings from students and experts
- User-friendly design for easy navigation
- Regularly updated with the latest news and developments

## Technologies Used

- Nextjs
- TypeScript
- Tailwindcss

## Getting Started

To get started with the University Information Hub, simply navigate to our website and start exploring! The website is designed to be user-friendly and easy to navigate, ensuring that you can find the information you need quickly and efficiently.

## Contributing

To contribute to Unihub, follow these steps:

1. Fork this repository.
2. Create a new branch using `git checkout -b my-feature-branch`.
3. Make your changes and commit them using `git commit -m "Add new feature"`.
4. Push your changes to your fork using `git push origin my-feature-branch`.
5. Submit a pull request.

## Commit Message Convention

This website follows [Conventional Commits]

Commit message will be checked using [husky and commit lint] , you can't commit if not using the proper convention below.

### Format

`<type>(optional scope): <description>`
Example: `feat(pre-event): add speakers section`

### 1. Type

Available types are:

- feat → Changes about addition or removal of a feature. Ex: `feat: add table on landing page`, `feat: remove table from landing page`
- fix → Bug fixing, followed by the bug. Ex: `fix: illustration overflows in mobile view`
- docs → Update documentation (README.md)
- style → Updating style, and not changing any logic in the code (reorder imports, fix whitespace, remove comments)
- chore → Installing new dependencies, or bumping deps
- refactor → Changes in code, same output, but different approach
- ci → Update github workflows, husky
- test → Update testing suite, cypress files
- revert → when reverting commits
- perf → Fixing something regarding performance (deriving state, using memo, callback)
- vercel → Blank commit to trigger vercel deployment. Ex: `vercel: trigger deployment`

### 2. Optional Scope

Labels per page Ex: `feat(pre-event): add date label`

\*If there is no scope needed, you don't need to write it

### 3. Description

Description must fully explain what is being done.

Add BREAKING CHANGE in the description if there is a significant change.

**If there are multiple changes, then commit one by one**

- After colon, there are a single space Ex: `feat: add something`
- When using `fix` type, state the issue Ex: `fix: file size limiter not working`
- Use imperative, and present tense: "change" not "changed" or "changes"
- Don't use capitals in front of the sentence
- Don't add full stop (.) at the end of the sentence

## API Documentation

API documentation is available in the `docs` folder of this repository.

## Testing

To run tests on JustGo Health, use the following command: `npm test`.

## Support

If you have any questions or concerns about the University Information Hub, please contact us at support@universityinfohub.com. We are dedicated to providing exceptional customer service and ensuring that your experience with our website is enjoyable and informative.

## License

The University Information Hub is licensed under the MIT License. See the `LICENSE` file for more information.

## Contact

For questions or concerns, please contact us at [email address].

## Acknowledgments

We would like to thank the following libraries and resources:

- Nextjs
- TypeScript
- Tailwindcss

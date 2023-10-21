export default {
  '*.{js,ts,vue}': 'eslint',
	'*.{css,scss,vue}': 'stylelint',
	'*.test.{js,ts}': (filenames) => `vitest related ${filenames.join(',')} --run`
};

const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Marcio Cruz',
  authorAddress: 'marciocadev@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'teste-projen-cdk',
  repositoryUrl: 'https://github.com/marciocadev/teste-projen-cdk.git',

  antitamper: false,
  release: true,
  docgen: true,
  eslint: true,
  tsconfig: {
    compilerOptions: {
      lib: ['dom', 'es2019'],
    },
  },
});
project.synth();
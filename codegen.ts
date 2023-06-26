import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  ignoreNoDocuments: true,
  // hooks: { afterAllFileWrite: ['eslint --fix'] },
  generates: {
    './src/gql/generated/kassandraApi.ts': {
      schema: 'https://backend.kassandra.finance',
      documents: ['./src/gql/queries/kassandra/**/*-kassandra.gql'],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request'
      ],
      config: {
        enumsAsTypes: true
      }
    },
    './src/gql/generated/githubApi.ts': {
      // schema: [
      //   {
      //     'https://api.github.com/graphql': {
      //       headers: {
      //         Authorization: `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`,
      //       }
      //     }
      //   }
      // ],
      schema: './schema.docs.graphql',
      documents: ['./src/gql/queries/github/**/*-github.gql'],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request'
      ],
      config: {
        enumsAsTypes: true
      }
    }
  }
}

export default config

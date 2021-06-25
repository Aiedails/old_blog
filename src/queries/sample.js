import gql from 'graphql-tag'
export const Sample = gql`
query{
    repository(owner:"Aiedails", name:"igemwiki") {
        id
        description
        codeOfConduct{name}
    }
}
`
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSponsor = /* GraphQL */ `
  query GetSponsor($id: ID!) {
    getSponsor(id: $id) {
      id
      firstName
      lastName
      email
      picture
      caseCount
      veterans {
        id
        firstName
        lastName
        age
        email
        branch
        dos
        eos
        location
        picture
        dob
        pob
        rank
        isCaseClosed
        notes
        sponsor {
          id
          firstName
          lastName
          email
          picture
          caseCount
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSponsors = /* GraphQL */ `
  query ListSponsors(
    $filter: ModelSponsorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSponsors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        picture
        caseCount
        veterans {
          id
          firstName
          lastName
          age
          email
          branch
          dos
          eos
          location
          picture
          dob
          pob
          rank
          isCaseClosed
          notes
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVeteran = /* GraphQL */ `
  query GetVeteran($id: ID!) {
    getVeteran(id: $id) {
      id
      firstName
      lastName
      age
      email
      branch
      dos
      eos
      location
      picture
      dob
      pob
      rank
      isCaseClosed
      notes
      sponsor {
        id
        firstName
        lastName
        email
        picture
        caseCount
        veterans {
          id
          firstName
          lastName
          age
          email
          branch
          dos
          eos
          location
          picture
          dob
          pob
          rank
          isCaseClosed
          notes
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listVeterans = /* GraphQL */ `
  query ListVeterans(
    $filter: ModelVeteranFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVeterans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        age
        email
        branch
        dos
        eos
        location
        picture
        dob
        pob
        rank
        isCaseClosed
        notes
        sponsor {
          id
          firstName
          lastName
          email
          picture
          caseCount
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAdmin = /* GraphQL */ `
  query GetAdmin($id: ID!) {
    getAdmin(id: $id) {
      id
      firstName
      lastName
      createdAt
      updatedAt
    }
  }
`;
export const listAdmins = /* GraphQL */ `
  query ListAdmins(
    $filter: ModelAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLeaderBoard = /* GraphQL */ `
  query GetLeaderBoard($id: ID!) {
    getLeaderBoard(id: $id) {
      id
      sponsors {
        id
        firstName
        lastName
        email
        picture
        caseCount
        veterans {
          id
          firstName
          lastName
          age
          email
          branch
          dos
          eos
          location
          picture
          dob
          pob
          rank
          isCaseClosed
          notes
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      caseCount
      createdAt
      updatedAt
    }
  }
`;
export const listLeaderBoards = /* GraphQL */ `
  query ListLeaderBoards(
    $filter: ModelLeaderBoardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeaderBoards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sponsors {
          id
          firstName
          lastName
          email
          picture
          caseCount
          createdAt
          updatedAt
        }
        caseCount
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

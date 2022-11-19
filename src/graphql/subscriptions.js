/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSponsor = /* GraphQL */ `
  subscription OnCreateSponsor($filter: ModelSubscriptionSponsorFilterInput) {
    onCreateSponsor(filter: $filter) {
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
export const onUpdateSponsor = /* GraphQL */ `
  subscription OnUpdateSponsor($filter: ModelSubscriptionSponsorFilterInput) {
    onUpdateSponsor(filter: $filter) {
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
export const onDeleteSponsor = /* GraphQL */ `
  subscription OnDeleteSponsor($filter: ModelSubscriptionSponsorFilterInput) {
    onDeleteSponsor(filter: $filter) {
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
export const onCreateVeteran = /* GraphQL */ `
  subscription OnCreateVeteran($filter: ModelSubscriptionVeteranFilterInput) {
    onCreateVeteran(filter: $filter) {
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
export const onUpdateVeteran = /* GraphQL */ `
  subscription OnUpdateVeteran($filter: ModelSubscriptionVeteranFilterInput) {
    onUpdateVeteran(filter: $filter) {
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
export const onDeleteVeteran = /* GraphQL */ `
  subscription OnDeleteVeteran($filter: ModelSubscriptionVeteranFilterInput) {
    onDeleteVeteran(filter: $filter) {
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
export const onCreateAdmin = /* GraphQL */ `
  subscription OnCreateAdmin($filter: ModelSubscriptionAdminFilterInput) {
    onCreateAdmin(filter: $filter) {
      id
      firstName
      lastName
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAdmin = /* GraphQL */ `
  subscription OnUpdateAdmin($filter: ModelSubscriptionAdminFilterInput) {
    onUpdateAdmin(filter: $filter) {
      id
      firstName
      lastName
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAdmin = /* GraphQL */ `
  subscription OnDeleteAdmin($filter: ModelSubscriptionAdminFilterInput) {
    onDeleteAdmin(filter: $filter) {
      id
      firstName
      lastName
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLeaderBoard = /* GraphQL */ `
  subscription OnCreateLeaderBoard(
    $filter: ModelSubscriptionLeaderBoardFilterInput
  ) {
    onCreateLeaderBoard(filter: $filter) {
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
export const onUpdateLeaderBoard = /* GraphQL */ `
  subscription OnUpdateLeaderBoard(
    $filter: ModelSubscriptionLeaderBoardFilterInput
  ) {
    onUpdateLeaderBoard(filter: $filter) {
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
export const onDeleteLeaderBoard = /* GraphQL */ `
  subscription OnDeleteLeaderBoard(
    $filter: ModelSubscriptionLeaderBoardFilterInput
  ) {
    onDeleteLeaderBoard(filter: $filter) {
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

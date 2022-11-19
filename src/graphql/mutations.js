/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSponsor = /* GraphQL */ `
  mutation CreateSponsor(
    $input: CreateSponsorInput!
    $condition: ModelSponsorConditionInput
  ) {
    createSponsor(input: $input, condition: $condition) {
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
export const updateSponsor = /* GraphQL */ `
  mutation UpdateSponsor(
    $input: UpdateSponsorInput!
    $condition: ModelSponsorConditionInput
  ) {
    updateSponsor(input: $input, condition: $condition) {
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
export const deleteSponsor = /* GraphQL */ `
  mutation DeleteSponsor(
    $input: DeleteSponsorInput!
    $condition: ModelSponsorConditionInput
  ) {
    deleteSponsor(input: $input, condition: $condition) {
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
export const createVeteran = /* GraphQL */ `
  mutation CreateVeteran(
    $input: CreateVeteranInput!
    $condition: ModelVeteranConditionInput
  ) {
    createVeteran(input: $input, condition: $condition) {
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
export const updateVeteran = /* GraphQL */ `
  mutation UpdateVeteran(
    $input: UpdateVeteranInput!
    $condition: ModelVeteranConditionInput
  ) {
    updateVeteran(input: $input, condition: $condition) {
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
export const deleteVeteran = /* GraphQL */ `
  mutation DeleteVeteran(
    $input: DeleteVeteranInput!
    $condition: ModelVeteranConditionInput
  ) {
    deleteVeteran(input: $input, condition: $condition) {
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
export const createAdmin = /* GraphQL */ `
  mutation CreateAdmin(
    $input: CreateAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    createAdmin(input: $input, condition: $condition) {
      id
      firstName
      lastName
      createdAt
      updatedAt
    }
  }
`;
export const updateAdmin = /* GraphQL */ `
  mutation UpdateAdmin(
    $input: UpdateAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    updateAdmin(input: $input, condition: $condition) {
      id
      firstName
      lastName
      createdAt
      updatedAt
    }
  }
`;
export const deleteAdmin = /* GraphQL */ `
  mutation DeleteAdmin(
    $input: DeleteAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    deleteAdmin(input: $input, condition: $condition) {
      id
      firstName
      lastName
      createdAt
      updatedAt
    }
  }
`;
export const createLeaderBoard = /* GraphQL */ `
  mutation CreateLeaderBoard(
    $input: CreateLeaderBoardInput!
    $condition: ModelLeaderBoardConditionInput
  ) {
    createLeaderBoard(input: $input, condition: $condition) {
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
export const updateLeaderBoard = /* GraphQL */ `
  mutation UpdateLeaderBoard(
    $input: UpdateLeaderBoardInput!
    $condition: ModelLeaderBoardConditionInput
  ) {
    updateLeaderBoard(input: $input, condition: $condition) {
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
export const deleteLeaderBoard = /* GraphQL */ `
  mutation DeleteLeaderBoard(
    $input: DeleteLeaderBoardInput!
    $condition: ModelLeaderBoardConditionInput
  ) {
    deleteLeaderBoard(input: $input, condition: $condition) {
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

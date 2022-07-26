import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;

// START OF OUR QUERIES
export const GET_ME = gql`
  {
    token
    me {
      firstName
      lastName
      email
      createdAt
      orders {
        purchaseDate
        products {
          name
          description
          price
          image
          category {
            name
          }
        }
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query products($category: String) {
    products(category: $category) {
      _id
      name
      description
      price
      image
      quantity
      category {
        name
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query product($_id: ID!) {
    product(_id: $_id) {
      name
      description
      price
      image
      quantity
      category {
        name
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const GET_ORDER = gql`
  query order($_id: ID!) {
    order(_id: $_id) {
      purchaseDate
      products {
        name
        description
        price
        image
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const GET_ORDERS = gql`
  {
    orders {
      purchaseDate
      products {
        name
        description
        price
        image
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const GET_CHECKOUT = gql`
  query checkout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

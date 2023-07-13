import {gql} from "@apollo/client";

export const PRODUCT_BY_CATEGORY_SLUG = gql` query PRODUCT_BY_CATEGORY_SLUG($slug: ID!) {
	productCategory(id: $slug, idType: SLUG) {
	  id
	  name
	  products(first: 50) {
		nodes {
		  id
		  productId: databaseId
		  averageRating
		  slug
		  description
		  sku
		  image {
			id
			uri
			title
			srcSet
			sourceUrl
		  }
		  name
		  ... on SimpleProduct {
			price
			regularPrice
			salePrice
			id
		  }
		  ... on VariableProduct {
			price
			regularPrice
			salePrice
			id
		  }
		  ... on ExternalProduct {
			price
			id
			regularPrice
			salePrice
			externalUrl
		  }
		  ... on GroupProduct {
			products {
			  nodes {
				... on SimpleProduct {
				  id
				  regularPrice
				  salePrice
				  price
				}
			  }
			}
			id
		  }
		}
	  }
	}
  }
  `;

export const PRODUCT_CATEGORIES_SLUGS = gql` query PRODUCT_CATEGORIES_SLUGS {
    productCategories {
    nodes {
      id
      slug
    }
  }
}`;

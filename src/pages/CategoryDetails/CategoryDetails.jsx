import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { filterProducts } from "../../store/actions/productActions";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import Loading from "../../components/Loading/Loading";
function CategoryDetails() {
  const { categories } = useSelector((state) => state.allCategories);
  const categoriesArray = categories?.categories;
  const { loading, error, filteredProducts } = useSelector(
    (state) => state.filteredProducts
  );

  const productsArray = filteredProducts?.products;
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(filterProducts(`categoryId=${categoryId}`));
  }, [categoryId]);

  return (
    <div>
      <h2>
        {categoriesArray?.map((category) =>
          category._id === categoryId ? category.categoryName : null
        )}
      </h2>

      <div>
        {loading ? (
          <Loading />
        ) : error ? (
          <div>errro</div>
        ) : productsArray?.length === 0 ? (
          <div>there is no products under this category</div>
        ) : (
          <div className="row mb-0 mb-lg-3  g-4 mt-5 ">
            {productsArray?.map((product, index) => (
              <div
                className={`col-lg-4 d-flex justify-content-center mb-3 mb-lg-0`}
                key={index}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryDetails;

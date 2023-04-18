import { useContext,Fragment} from 'react';

// import ProductCard from '../../component/product-card/product-card'
import CategoryPreview from '../../component/category-preview/category-preview';
import { CategoriesContext } from '../../context/categories.context';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
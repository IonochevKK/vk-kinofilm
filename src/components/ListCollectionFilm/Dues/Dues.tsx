import CollectionItem, {
  CollectionItemProps,
} from "../CollectionItem/CollectionItem";
import { useGetCollectionDuesQuery } from "../../../redux/filmsApi";
import "react-loading-skeleton/dist/skeleton.css";
const Dues = () => {
  const { data, isFetching } = useGetCollectionDuesQuery({});
  return (
    <div className="dues">
      <div className="collection">
        {data !== undefined ? (
          <>
            {data?.docs?.toReversed().map((collection: CollectionItemProps) => (
              <div className="item" key={collection.id}>
                <CollectionItem
                  id={collection.id}
                  name={collection.name}
                  slug={collection.slug}
                  moviesCount={collection.moviesCount}
                  cover={collection.cover}
                  category={collection.category}
                  isFetching={isFetching}
                />
              </div>
            ))}
          </>
        ) : (
          <>
            {[...Array(10)].map((_,index) => (
              <div className="item" key={index}>
                <CollectionItem isFetching={isFetching} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Dues;

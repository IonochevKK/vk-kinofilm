import { useGetCollectionOnlineCinemaQuery } from "../../../redux/filmsApi";
import CollectionItem, {
  CollectionItemProps,
} from "../CollectionItem/CollectionItem";
import "react-loading-skeleton/dist/skeleton.css";
const OnlineCinema = () => {
  const { data, isFetching } = useGetCollectionOnlineCinemaQuery({});
  return (
    <div className="onlineCinema">
      <div className="films">
        <div className="collection">
          {data !== undefined ? (
            <>
              {data?.docs
                ?.toReversed()
                .map((collection: CollectionItemProps) => (
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
    </div>
  );
};

export default OnlineCinema;

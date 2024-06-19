import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  useGetCollectionFilmswithSlugListQuery,
  useGetFilmsWithFiltersQuery,
} from "../redux/filmsApi";
import { RootState } from "../redux/store";

const useFetchDataFilter = (page: number) => {
  const { slug } = useParams<{ slug: string }>();
  const filters = useSelector((state: RootState) => state.filters.filters);
  const filterFirst = filters.length > 0 ? filters[0]?.value : undefined;

  let data: any;
  let isFetching: boolean;

  const hasFilters = filters.length > 0;

  const { data: otherFilterData, isFetching: isFetchingOtherFilter } =
    useGetFilmsWithFiltersQuery({
      page,
      filterFirst,
      slug,
    });

  const { data: noFilterData, isFetching: isFetchingNoFilter } =
    useGetCollectionFilmswithSlugListQuery({ slug,page });

  if (hasFilters) {
    switch (filters[0]?.label) {
      case "Все страны":
        data = countryFilterData;
        isFetching = isFetchingCountryFilter;
        break;
      default:
        data = otherFilterData;
        isFetching = isFetchingOtherFilter;
        break;
    }
  } else {
    data = noFilterData;
    isFetching = isFetchingNoFilter;
  }

  return { data, isFetching };
};

export default useFetchDataFilter;

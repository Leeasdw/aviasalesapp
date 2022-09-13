export const checkSort = (arr, filter) => {
  const arrCopy = [...arr];
  if (filter === "PRICE") return arrCopy.sort((previous, next) => (previous.price > next.price ? 1 : -1));

  if (filter === "TIME")
    return arrCopy.sort((previous, next) =>
      previous.segments[0].duration + previous.segments[1].duration >
      next.segments[0].duration + next.segments[1].duration
        ? 1
        : -1
    );
  if (filter === "OPTIMAL")
    return arrCopy.sort((previous, next) =>
      previous.segments[0].duration + previous.segments[1].duration + previous.price / 10 >
      next.segments[0].duration + next.segments[1].duration + next.price / 10
        ? 1
        : -1
    );
};

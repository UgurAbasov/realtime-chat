const getDifference = (authData: any) => {
  const dateNow = new Date();
  const creationTime = new Date(authData);
  const differenceInMilliseconds: number = dateNow.getTime() - creationTime.getTime();
  const differenceInMinutes: number = differenceInMilliseconds / (1000 * 60);
  return differenceInMinutes
};

export default getDifference;

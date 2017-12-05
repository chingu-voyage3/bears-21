export const getHouseIssues = () => {
  return new Promise( (resolve, reject) => {
    resolve(
      [
        {
          _id: 1,
          house_image: "//via.placeholder.com/200x200",
          issues: [
            {_id: 1, status: "open", description: "test issue"},
            {_id: 2, status: "resolved", description: "kitchen tap leaking"}
          ]
        }
      ]
    );
  });
};

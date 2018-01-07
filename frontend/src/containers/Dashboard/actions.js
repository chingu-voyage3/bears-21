export const getHouseIssues = () => {
  return new Promise((resolve) => {
    resolve(
      [
        {
          _id: 1,
          house_image: "//via.placeholder.com/200x200",
          issues: [
            {_id: 1, status: "open", title: "test issue", description: "This is a test issue"},
            {_id: 2, status: "resolved", title: "kitchen tap leaking", description: "can't turn the kitchen tap off!"}
          ]
        }
      ]
    );
  });
};

import React from 'react';
import useForm from '../hooks/useForm';

const initialValues = {
  gitLabProjectId: '',
  clickUpTaskId: '',
  gitLabIssueTitle: '',
};

function Start() {
  const { values, handleChange, handleSubmit } = useForm({
    initialValues,
    onSubmit: console.log,
    onChange: ({ name, value, setValues, values }: any) => {
      if (name === 'clickUpTaskId') {
        Promise.resolve('Task title').then((clickUpTaskTitle) => {
          setValues({
            ...values,
            [name]: value,
            gitLabIssueTitle: clickUpTaskTitle,
          });
        });
      }
    },
  });
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            GitLab Project ID
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="gitLabProjectId"
              onChange={handleChange}
              value={values.gitLabProjectId}
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ClickUp Task ID
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="clickUpTaskId"
              onChange={handleChange}
              value={values.clickUpTaskId}
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            GitLab Issue Title
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="gitLabIssueTitle"
              onChange={handleChange}
              value={values.gitLabIssueTitle}
            />
          </label>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Start;

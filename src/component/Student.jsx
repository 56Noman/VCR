const Student = () => {
  const submitForm = () => {
    const isConfirmed = confirm(
      "Do you want to add the class schedule to the calendar as a reminder?"
    );

    if (isConfirmed) {
      alert(
        "Thank you! You have added it to the Calendar."
      );
    } else {
      alert(
        "Oops! You have not added it to the Calendar."
      );
    }
  };

  return (
    <div className="px-4 py-6 max-w-full mx-auto">
      <form id="checkboxForm" className="p-4 bg-gray-100 rounded-lg shadow-md">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden table-auto">
          <caption className="text-xl font-semibold mb-4 text-center">
            Weekly Class Routine
          </caption>
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-2 sm:px-4 border-b">Day</th>
              <th className="py-2 px-2 sm:px-4 border-b">
                09:00 am - 10:30 am
              </th>
              <th className="py-2 px-2 sm:px-4 border-b">
                10:30 am - 12:00 pm
              </th>
              <th className="py-2 px-2 sm:px-4 border-b">
                12:00 pm - 01:30 pm
              </th>
              <th className="py-2 px-2 sm:px-4 border-b">
                02:30 pm - 04:00 pm
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
            <td className="py-2 px-2 sm:px-4 border-b">Saturday</td>
            <td className="py-2 px-2 sm:px-4 border-b"></td>
            <td className="py-2 px-2 sm:px-4 border-b">ICT-4102</td>
            <td className="py-2 px-2 sm:px-4 border-b"></td>
            <td className="py-2 px-2 sm:px-4 border-b">ICT-4104</td>
            </tr>
            <tr className="text-center">
            <td className="py-2 px-2 sm:px-4 border-b">Sunday</td>
            <td className="py-2 px-2 sm:px-4 border-b">ICT-4101</td>
            <td className="py-2 px-2 sm:px-4 border-b"></td>
            <td className="py-2 px-2 sm:px-4 border-b">ICT-4103</td>
            <td className="py-2 px-2 sm:px-4 border-b"></td>
            </tr>
            <tr className="text-center">
            <td className="py-2 px-2 sm:px-4 border-b">Monday</td>
            <td className="py-2 px-2 sm:px-4 border-b">ICT-4101</td>
            <td className="py-2 px-2 sm:px-4 border-b">ICT-4104</td>
            <td className="py-2 px-2 sm:px-4 border-b"></td>
            <td className="py-2 px-2 sm:px-4 border-b">ICT-4102</td>
            </tr>
            <tr className="text-center">
            <td className="py-2 px-2 sm:px-4 border-b">Tuesday</td>
            <td className="py-2 px-2 sm:px-4 border-b">ICT-412</td>
            <td className="py-2 px-2 sm:px-4 border-b">ICT-4103</td>
            <td className="py-2 px-2 sm:px-4 border-b"></td>
            <td className="py-2 px-2 sm:px-4 border-b"></td>
            </tr>
            <tr className="text-center">
            <td className="py-2 px-2 sm:px-4 border-b">Wednesday</td>
            <td className="py-2 px-2 sm:px-4 border-b"></td>
            <td className="py-2 px-2 sm:px-4 border-b"></td>
            <td className="py-2 px-2 sm:px-4 border-b">ICT-4101</td>
            <td className="py-2 px-2 sm:px-4 border-b">ICT-4103</td>
            </tr>
          </tbody>
        </table>
        <button
          type="button"
          onClick={submitForm}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full sm:w-auto"
        >
          Add to Calendar
        </button>
      </form>
    </div>
  );
};

export default Student;

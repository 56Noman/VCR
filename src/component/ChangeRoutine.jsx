const ChangeRoutine = () => {
  const submitForm = () => {
    const isConfirmed = confirm(
      "Do you want to add the class schedule to the calendar as a reminder?"
    );

    if (isConfirmed) {
      alert("Thank you, Sir! You have added it to the Calendar.");
    } else {
      alert("Oops, Sir! You have not added it to the Calendar.");
    }
  };
  return (
    <div>
      {/* Update Class Routine start here */}
      <div className="px-4 py-6 max-w-full mx-auto">
        <form className="p-4 bg-gray-100 rounded-lg shadow-md space-y-4">
          <h1 className="text-2xl font-semibold mb-4 text-center">
            Update Class Routine
          </h1>

          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Year:</label>
              <select className="block w-full p-2 border border-gray-300 rounded-md">
                <option value="First">First</option>
                <option value="Second">Second</option>
                <option value="Third">Third</option>
                <option value="Fourth">Fourth</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                Semester:
              </label>
              <select className="block w-full p-2 border border-gray-300 rounded-md">
                <option value="First">First</option>
                <option value="Second">Second</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Day:</label>
              <select className="block w-full p-2 border border-gray-300 rounded-md">
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                Time Slot:
              </label>
              <select className="block w-full p-2 border border-gray-300 rounded-md">
                <option value="09:00 am - 10:30 am">09:00 am - 10:30 am</option>
                <option value="10:30 am - 12:00 pm">10:30 am - 12:00 pm</option>
                <option value="12:00 pm - 01:30 pm">12:00 pm - 01:30 pm</option>
                <option value="02:30 pm - 04:00 pm">02:30 pm - 04:00 pm</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                Course Code:
              </label>
              <select className="block w-full p-2 border border-gray-300 rounded-md">
                <option value="ICT-4101">ICT-4101</option>
                <option value="ICT-4102">ICT-4102</option>
                <option value="ICT-4103">ICT-4103</option>
                <option value="ICT-4104">ICT-4104</option>
                <option value="ICT-4105">ICT-4105</option>
                <option value="ICT-4106">ICT-4106</option>
                <option value="ICT-4107">ICT-4107</option>
              </select>
            </div>
          </div>

          <button
            type="button"
            onClick={submitForm}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full sm:w-auto"
          >
            Update Routine
          </button>
        </form>
      </div>

      {/* Update Class Routine end here */}

      {/* teacher's routine start here  */}
      <div className="px-4 py-6 max-w-full mx-auto">
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
              <td className="py-2 px-2 sm:px-4 border-b"></td>
              <td className="py-2 px-2 sm:px-4 border-b"></td>
              <td className="py-2 px-2 sm:px-4 border-b">ICT-4103</td>
              <td className="py-2 px-2 sm:px-4 border-b"></td>
            </tr>
            <tr className="text-center">
              <td className="py-2 px-2 sm:px-4 border-b">Monday</td>
              <td className="py-2 px-2 sm:px-4 border-b"></td>
              <td className="py-2 px-2 sm:px-4 border-b">ICT-4104</td>
              <td className="py-2 px-2 sm:px-4 border-b"></td>
              <td className="py-2 px-2 sm:px-4 border-b"></td>
            </tr>
            <tr className="text-center">
              <td className="py-2 px-2 sm:px-4 border-b">Tuesday</td>
              <td className="py-2 px-2 sm:px-4 border-b">ICT-4102</td>
              <td className="py-2 px-2 sm:px-4 border-b">ICT-4103</td>
              <td className="py-2 px-2 sm:px-4 border-b"></td>
              <td className="py-2 px-2 sm:px-4 border-b"></td>
            </tr>
            <tr className="text-center">
              <td className="py-2 px-2 sm:px-4 border-b">Wednesday</td>
              <td className="py-2 px-2 sm:px-4 border-b"></td>
              <td className="py-2 px-2 sm:px-4 border-b"></td>
              <td className="py-2 px-2 sm:px-4 border-b"></td>
              <td className="py-2 px-2 sm:px-4 border-b"></td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Teacher's routine end here  */}

      {/* fourth year First semester routine start here  */}
      <div className="px-4 py-6 max-w-full mx-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden table-auto">
          <caption className="text-xl font-semibold mb-4 text-center">
            Fourth year First Semester Class Routine
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
      </div>
      {/* fourth year First semester routine end here  */}
    </div>
  );
};

export default ChangeRoutine;

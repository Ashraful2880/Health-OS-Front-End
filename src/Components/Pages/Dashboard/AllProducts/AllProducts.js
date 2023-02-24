import axios from "axios";
import React, { useEffect } from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import LoadingScreen from "../../../Shared/LoadingScreen/LoadingScreen";

const AllProducts = () => {
  const [projects, setProjects] = React.useState();
  const [selectComponent, setSelectComponent] = React.useState();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_PATH}/projects`).then((resp) => {
      setProjects(resp.data);
    });
  }, []);

  useEffect(() => {
    setSelectComponent(
      projects?.map((element) => {
        delete element?._id;
        return element;
      })
    );
  }, [projects]);

  const handleDrop = (droppedItem) => {
    if (!droppedItem.destination) return;
    var updatedList = [...selectComponent];
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    setSelectComponent(updatedList);
  };

  const updateChanges = () => {
    axios
      .put(`${process.env.REACT_APP_API_PATH}/projects`, selectComponent)
      .then(function (response) {
        alert("Updated Successfull");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="bg-shape h-screen">
      {/* Heading Title */}
      <div className="lg:pt-3 md:pt-3 pt-2 lg:px-3 md:px-3 px-0 mx-2">
        <div className="text-xl bg-white lg:w-60 w-full flex items-center gap-x-2 px-5">
          <AiOutlineAppstoreAdd className="text-[#2563eb]" />
          <h3 className="font-semibold text-[#2563eb] py-1.5">
            All Product List
          </h3>
        </div>
      </div>

      {projects?.length > 0 ? (
        <div className="mx-auto px-6">
          <div className="pb-8">
            <div className="py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-indigo-500 bg-indigo-500 text-left text-sm font-bold text-white uppercase tracking-wider">
                        SL No
                      </th>
                      <th className="px-5 py-3 border-b-2 border-indigo-500 bg-indigo-500 text-left text-sm font-bold text-white uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-5 py-3 border-b-2 border-indigo-500 bg-indigo-500 text-left text-sm font-bold text-white uppercase tracking-wider">
                        Category
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <DragDropContext onDragEnd={handleDrop}>
                      <Droppable droppableId="list-container">
                        {(provided) => (
                          <div
                            className="list-container"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                          >
                            {selectComponent?.map((item, index) => (
                              <Draggable
                                key={item}
                                draggableId={item?.name}
                                index={index}
                              >
                                {(provided) => (
                                  <tr
                                    className="item-container"
                                    ref={provided.innerRef}
                                    {...provided.dragHandleProps}
                                    {...provided.draggableProps}
                                  >
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                                      <p> {index + 1} </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                                      <p className="text-gray-900 whitespace-no-wrap">
                                        {item?.name}
                                      </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
                                      <p className="text-gray-900 whitespace-no-wrap">
                                        {item?.category}
                                      </p>
                                    </td>
                                  </tr>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    </DragDropContext> */}
                  </tbody>
                </table>
              </div>
              <div className="mt-3 flex justify-start">
                <button
                  className="px-6 py-2.5 border border-indigo-600 rounded-md bg-indigo-600 hover:bg-white hover:text-[#2563eb] text-white duration-300"
                  onClick={() => updateChanges()}
                  type="submit"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default AllProducts;

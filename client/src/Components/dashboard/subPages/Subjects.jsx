import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Course_Modules,
  LinkList,
} from "../../../context/SubjectNonDupLinkedList";

const Subjects = () => {
  const navigate = useNavigate();
  const [addSubject, setaddSubject] = useState(true);
  const changeaddSubjectrojectState = () => {
    SaveSubjects();
    console.log("gg");
    setaddSubject(!addSubject);
  };
  const subjects = new LinkList();

  function SaveSubjects() {
    //const s = new Course_Modules();
    subjects.add(10);
    subjects.add(20);
    subjects.add(10);
    subjects.add(40);
    subjects.display();
    subjects.remove(20);
    subjects.display();
    console.log("Leng " + subjects.length());
  }

  return (
    <div>
      <div className="flex items-center justify-between p-10">
        <h1 className="text-gray-500 text-[28px] leading-[34px] font-normal cursor-pointer">
          My Subjects
        </h1>
        {addSubject ? (
          <button
            className="bg-red-500 h-[32px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer"
            onClick={changeaddSubjectrojectState}
          >
            Cancel
          </button>
        ) : (
          <button
            className="bg-green-500 h-[32px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer"
            onClick={() => {
              changeaddSubjectrojectState();
            }}
          >
            New
          </button>
        )}
      </div>
      {addSubject && (
        <div className="p-10 mx-2 transition duration-300 ease-in">
          <div>
            <form>
              <label
                for="level-select"
                class="block text-white font-bold mb-2 mt-5"
              >
                Select Your level:
              </label>
              <select
                id="level-select"
                name="level-select"
                class="block w-1/3 p-2 rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="option1" class="text-gray-700">
                  Level 1
                </option>
                <option value="option2" class="text-gray-700">
                  Level 2
                </option>
                <option value="option3" class="text-gray-700">
                  Level 3
                </option>
                <option value="option3" class="text-gray-700">
                  Level 4
                </option>
              </select>

              <label
                for="level-select"
                class="block text-white font-bold mb-2 mt-5"
              >
                Select Your Semester:
              </label>
              <select
                id="level-select"
                name="level-select"
                class="block w-1/3 p-2 rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="option1" class="text-gray-700">
                  Semester 1
                </option>
                <option value="option2" class="text-gray-700">
                  Semester 2
                </option>
              </select>


              <div> Subject length
                {subjects.length()}
              </div>
            </form>
          </div>
        </div>
      )}

      <div>hii</div>
    </div>
  );
};

export default Subjects;

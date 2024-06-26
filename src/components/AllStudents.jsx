import axios from "axios";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { global } from "../projectContext/Context";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { VscPreview } from "react-icons/vsc";
import { MdEdit, MdDelete } from "react-icons/md";

const AllStudents = () => {
  const navigate = useNavigate();
  let [uData, setUData] = useState([]);
  let [deleteCount, setDeleteCount] = useState(0);

  let fetchd = async () => {
    let { data } = await axios.get("http://localhost:5000/users");
    setUData(data);
  };

  useLayoutEffect(() => {
    fetchd();
  }, [deleteCount]);

  let deleteUser = (id) => {
    axios.delete(`http://localhost:5000/users/${id}`);
    setDeleteCount((prev) => prev + 2);
    console.log(deleteCount);
    // navigate("/home/allstudents")
  };

  return (
    <>
      <Outlet></Outlet>
      <section className="allstu">
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Student Name</th>
                <th>Phone No.</th>
                <th>Email</th>
                <th>ViewMore</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {uData.map((student) => {
                return (
                  <tr>
                    <td>{student.id}</td>
                    <td>{student.firstname + " " + student.lastname}</td>
                    <td>{student.number}</td>
                    <td>{student.email}</td>
                    <td>
                      <button>
                        <Link to={"/home/allstudents/viewmore"} state={student}>
                          <VscPreview />
                        </Link>
                      </button>
                    </td>
                    <td>
                      <button>
                        <Link
                          to={"/home/allstudents/updatestudents"}
                          state={student}
                        >
                          <MdEdit />
                        </Link>
                      </button>
                    </td>
                    <td>
                      <button onClick={() => deleteUser(student.id)}>
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AllStudents;

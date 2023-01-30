import React, { useEffect, useState } from "react";
import { doctor_list } from "../../Constant/Array";
import Drawer from "../../component/Drawer";
import { useRouter } from "next/router";

function Doctor() {
  const [tabaleData, setTabaleData] = useState([]);

  useEffect(() => {
    doctorelist_api();
  }, []);

  const doctorelist_api = async () => {
    try {
      const response = await fetch("http://localhost:4585/user/doctor", {
        method: "GET",
      });
      let responseJson = await response.json();

      console.log("responseJSon ::", responseJson);
      if (response.status === 200) {
        setTabaleData(responseJson.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const deletDoctoreItem = async (item) => {
    try {
      const response = await fetch(
        "http://localhost:4585/user/doctor/" + item._id,
        {
          method: "DELETE",
        }
      );
      let responseJSon = response.json();
      console.log("responseJSon:::", responseJSon);
      if (response.status === 200) {
        alert("Doctor breed Successfully Delete");
        doctorelist_api();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const route = useRouter();
  // console.log("route::", route.pathname);
  return (
    <div className="container-wrapped">
      <div className="row">
        <div
          className="col-2"
          style={{ backgroundColor: "lightblue", height: "100vh" }}
        >
          <Drawer
            product={() => route.push("/Admin/Product")}
            doctor={() => route.push("/Admin/Doctor")}
            order={() => route.push("/Admin/Order")}
            blog={() => route.push("/Admin/Blog")}
            key={route.asPath}
          />
        </div>
        <div className="col-10">
          <div className="hold-transition sidebar-mini layout-fixed">
            <div className="wrapper">
              <div className="content-wrapper">
                <section className="content-header">
                  <div className="container-fluid">
                    <div className="row mb-2">
                      <div className="col-sm-6">
                        <h1>Doctor</h1>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="content">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12">
                        <div className="card">
                          <div className="card-header">
                            <h3 className="card-title">Doctore List</h3>
                          </div>

                          <div className="card-body">
                            <table id="example2" className="table-bordered">
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Specialization</th>
                                  <th>Gender</th>
                                  <th>city</th>
                                  <th>registration</th>
                                  <th>council</th>
                                  <th>year</th>
                                  <th>degree</th>
                                  <th>collage</th>
                                  <th>completion</th>
                                  <th>experience</th>
                                  <th>practice</th>
                                  <th>Estname</th>
                                  {/* <th>Estcity</th>
                                  <th>Estlocality</th> */}

                                  <th>Edit</th>
                                  <th>Delet</th>
                                </tr>
                              </thead>
                              <tbody>
                                {tabaleData.map((item) => {
                                  return (
                                    <tr>
                                      <td>{item.name}</td>
                                      <td>{item.specialization}</td>
                                      <td>{item.gender}</td>
                                      <td>{item.city}</td>
                                      <td>{item.registration}</td>
                                      <td>{item.council}</td>
                                      <td>{item.year}</td>
                                      <td>{item.degree}</td>
                                      <td>{item.collage}</td>
                                      <td>{item.completion}</td>
                                      <td>{item.experience}</td>
                                      <td>{item.practice}</td>
                                      <td>{item.Estname}</td>
                                      {/* <td>{item.Estcity}</td>
                                      <td>{item.Estlocality}</td> */}
                                      <td>
                                        <button
                                          type="button"
                                          className="btn btn-link"
                                          onClick={() =>
                                            route.push({
                                              pathname: "/Admin/AddItem",
                                              query: {
                                                key: "Doctor",
                                                type: "Edit",
                                                id: item._id,
                                                name: item.name,
                                                specialization:
                                                  item.specialization,
                                                gender: item.gender,
                                                city: item.city,
                                                registration: item.registration,
                                                council: item.council,
                                                year: item.year,
                                                degree: item.degree,
                                                collage: item.collage,
                                                completion: item.completion,
                                                experience: item.experience,
                                                practice: item.practice,
                                                Estname: item.Estname,
                                                Estcity: item.Estcity,
                                                Estlocality: item.Estlocality,
                                              },
                                            })
                                          }
                                        >
                                          Edit
                                        </button>
                                      </td>
                                      <td>
                                        <button
                                          type="button"
                                          className="btn btn-danger"
                                          onClick={() => deletDoctoreItem(item)}
                                        >
                                          Delete
                                        </button>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="container-wrapped">
                  <button
                    type="button"
                    className="btn btn-info"
                    style={{ float: "right", margin: 30, color: "white" }}
                    onClick={() =>
                      route.push({
                        pathname: "/Admin/AddItem",
                        query: {
                          key: "Doctor",
                          type: "Add",
                        },
                      })
                    }
                  >
                    + Add Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctor;

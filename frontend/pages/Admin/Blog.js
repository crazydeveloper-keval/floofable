import React, { useEffect, useState } from "react";
import { tabale_data } from "../../Constant/Array";
import Drawer from "../../component/Drawer";
import { useRouter } from "next/router";

const Blog = () => {
  const [tabaledata, setTabaledata] = useState([]);
  const route = useRouter();

  useEffect(() => {
    productApicall();
  }, []);

  const productApicall = async () => {
    try {
      const response = await fetch("http://localhost:4585/user/blog", {
        method: "GET",
      });

      let responseJson = await response.json();
      console.log("response ::;", responseJson);
      if (response.status === 200) {
        setTabaledata(responseJson.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const deletItem = async (item) => {
    try {
      const response = await fetch(
        "http://localhost:4585/user/blog/" + item._id,
        {
          method: "DELETE",
        }
      );
      let responseJson = response.json();
      if (response.status === 200) {
        alert("Product breed Successfully Delete");
        productApicall();
      }
      console.log("responseJson ::", responseJson);
    } catch (error) {
      console.log("error ::", error);
    }
  };
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
                        <h1>Blog</h1>
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
                            <h3 className="card-title">Blog List</h3>
                          </div>

                          <div className="card-body">
                            <table
                              id="example2"
                              className="table table-bordered table-hover"
                            >
                              <thead>
                                <tr>
                                  <th>Title</th>
                                  <th>Image</th>
                                  <th>Description</th>
                                  <th>Edit</th>
                                  <th>Delet</th>
                                </tr>
                              </thead>
                              <tbody>
                                {tabaledata.map((item) => {
                                  return (
                                    <tr>
                                      <td>{item.title}</td>
                                      <td>{item.image}</td>
                                      <td>{item.description}</td>
                                      <td>
                                        <button
                                          type="button"
                                          className="btn btn-link"
                                          onClick={() =>
                                            route.push({
                                              pathname: "/Admin/AddItem",
                                              query: {
                                                key: "Blog",
                                                type: "Edit",
                                                id: item._id,
                                                title: item.title,
                                                image: item.image,
                                                description: item.description,
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
                                          onClick={() => deletItem(item)}
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
                    style={{ float: "right", margin: 30 }}
                    onClick={() =>
                      route.push({
                        pathname: "/Admin/AddItem",
                        query: {
                          key: "Blog",
                          type: "Add",
                          length: tabaledata.length,
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
};

export default Blog;

import React, { useEffect, useState } from "react";
import { tabale_data } from "../../Constant/Array";
import Drawer from "../../component/Drawer";
import { useRouter } from "next/router";
import Select from "react-select";
import { order_status } from "../../Constant/Array";
import styles from "../../styles/updateStatus.module.css";

function Updatestatus() {
  const [statusstate, setStatusstate] = useState({ value: "", label: "" });
  const route = useRouter();

  useEffect(() => {
    const { id, status, value } = route.query;
    console.log("id :::", id);
    // console.log("status :::", status);

    setStatusstate({ value: value, label: status });
  }, []);

  const saveProductData = async () => {
    let Closed = "Closed";
    let Pending = "Pending";
    let bodyData;
    bodyData = {
      id: route.query.id,
      status: statusstate.value,
    };
    try {
      const response = await fetch("http://localhost:4585/user/orderstatus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": "<calculated when request is sent>",
          Accept: "*/*",
        },
        body: JSON.stringify(bodyData),
      });
      let responseJson = response.json();
      console.log("resp[onse :::", response);
      if (response.status === 200) {
        alert("Order  Successfully Update");
        route.push("/Admin/Order");
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.log("error:::", error);
    }

    setStatusstate("");
  };

  const changeHandler = (value) => {
    console.log(value);
    setStatusstate({ value: value.value, label: value.label });
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
          />
        </div>
        <div className="col-10">
          <h1 style={{ marginTop: 30, marginLeft: 30 }}>Update order status</h1>

          <div
            className="hold-transition sidebar-mini layout-fixed"
            style={{ marginTop: 40, marginLeft: 30 }}
          >
            <div className="wrapper">
              <div style={{ marginTop: 10 }}>
                <span style={{ fontWeight: "500", fontSize: 20 }}>Status</span>
                <br />
                {/* <input
                  placeholder="Enter Status"
                  style={{
                    marginTop: 7,
                    borderRadius: 3,
                    width: 300,
                    height: 40,
                    borderColor: "#7e7e7e",
                    borderWidth: 1,
                  }}
                  value={statusstate}
                  onChange={Status}
                  // setNamestate(text)}
                  // onChange={(e) =>
                  //   console.log("e:::", JSON.stringify(e.target.value))
                  // }
                /> */}
                <Select
                  options={order_status}
                  value={statusstate}
                  onChange={changeHandler}
                  className={styles.dropdown}
                  placeholder="Status"
                />

                <div style={{ marginTop: 10 }}>
                  <span>(Enter status only "Pending" and "Closed")</span>
                </div>
              </div>

              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  marginTop: 10,
                }}
              >
                <button
                  style={{ marginRight: 20 }}
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    route.push("/Admin/Order"), setStatusstate("");
                  }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ paddingLeft: 20, paddingRight: 20 }}
                  onClick={() => saveProductData()}
                >
                  Save
                </button>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Updatestatus;

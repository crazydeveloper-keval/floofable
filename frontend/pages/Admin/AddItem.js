import React, { useEffect, useState } from "react";
import { tabale_data } from "../../Constant/Array";
import Drawer from "../../component/Drawer";
import { useRouter } from "next/router";

function AddItem() {
  const [namestate, setNamestate] = useState("");
  const [descriptionstate, setDescriptionstate] = useState("");
  const [pricestate, setPricestate] = useState("");
  const [img, setImg] = useState("");
  const [specializationstate, setSpecializationstate] = useState("");
  const [genderstate, setGenderstate] = useState("");
  const [citystate, setCitystate] = useState("");
  const [registrationstate, setRegistrationstate] = useState("");
  const [councilstate, setCouncilstate] = useState("");
  const [yearstate, setYearstate] = useState("");
  const [degreestate, setDegreestate] = useState("");
  const [collegestate, setCollegestate] = useState("");
  const [completionstate, setCompletionstate] = useState("");
  const [experiencestate, setExperiencestate] = useState("");
  const [practicestate, setPracticestate] = useState("");
  const [estnamestate, setEstnamestate] = useState("");
  const [estcitystate, setEstcitystate] = useState("");
  const [estLocalitystate, setEstLocalitystate] = useState("");
  const [productIdstate, setProductIdstate] = useState("");
  const [userIdstate, setUserIdstate] = useState("");
  const [addresstate, setAddresstate] = useState("");
  const [titlestate, setTitlestate] = useState("");

  const route = useRouter();

  useEffect(() => {
    if (route.query.key === "Product") {
      const { name, description, price, image } = route.query;
      setNamestate(name);
      setDescriptionstate(description);
      setPricestate(price);
      setImg(image);
    } else if (route.query.key === "Doctor") {
      const {
        name,
        specialization,
        gender,
        city,
        registration,
        council,
        year,
        degree,
        collage,
        completion,
        experience,
        practice,
        Estname,
        Estcity,
        Estlocality,
      } = route.query;
      setNamestate(name);
      setSpecializationstate(specialization);
      setGenderstate(gender);
      setCitystate(city);
      setRegistrationstate(registration);
      setCouncilstate(council);
      setYearstate(year);
      setDegreestate(degree);
      setCollegestate(collage);
      setCompletionstate(completion);
      setExperiencestate(experience);
      setPracticestate(practice);
      setEstnamestate(Estname);
      setEstcitystate(Estcity);
      setEstLocalitystate(Estlocality);
    } else if (route.query.key === "Order") {
      const { id, userId, address, productId, price } = route.query;
      setUserIdstate(userId);
      setAddresstate(address);
      setProductIdstate(productId);
      setPricestate(price);
    } else {
      const { id, title, image, description } = route.query;
      console.log("title :::", title);
      setTitlestate(title);
      setDescriptionstate(description);
      setImg(image);
    }
  }, []);

  //   console.log("router addItem", route);

  const saveProductData = async () => {
    if (route.query.type === "Edit") {
      let bodyData = {
        id: route.query.id,
        name: namestate,
        description: descriptionstate,
        price: pricestate,
        image: ["gfdgdfg"],
      };
      try {
        const response = await fetch("http://localhost:4585/user/product", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": "<calculated when request is sent>",
          },
          body: JSON.stringify(bodyData),
        });
        let responseJson = await response.json();
        if (response.status === 200) {
          route.push("/Admin/Product");
        } else {
          alert(responseJson.message);
        }
        console.log("response ::", responseJson);
      } catch (error) {
        console.log("error::", error);
      }
    } else {
      let bodyData = {
        name: namestate,
        description: descriptionstate,
        price: pricestate,
        image: ["gfdgdfg"],
      };
      try {
        const response = await fetch("http://localhost:4585/user/product", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": "<calculated when request is sent>",
          },
          body: JSON.stringify(bodyData),
        });
        let responseJson = await response.json();
        if (response.status === 200) {
          route.push("/Admin/Product");
        } else {
          alert(responseJson.message);
        }
        console.log("response ::", responseJson);
      } catch (error) {
        console.log("error::", error);
      }
    }
  };

  const nameset = (e) => {
    console.log("e :::", e);
    setNamestate(e.target.value);
  };
  const description = (e) => {
    // console.log("e :::", e.target.value);
    setDescriptionstate(e.target.value);
  };
  const price = (e) => {
    // console.log("e :::", e.target.value);
    setPricestate(e.target.value);
  };
  const specialization = (e) => {
    setSpecializationstate(e.target.value);
  };
  const gender = (e) => {
    // console.log("e :::", e.target.value);
    setGenderstate(e.target.value);
  };
  const city = (e) => {
    // console.log("e :::", e.target.value);
    setCitystate(e.target.value);
  };
  const registration = (e) => {
    setRegistrationstate(e.target.value);
  };
  const council = (e) => {
    // console.log("e :::", e.target.value);
    setCouncilstate(e.target.value);
  };
  const year = (e) => {
    setYearstate(e.target.value);
  };
  const degree = (e) => {
    setDegreestate(e.target.value);
  };
  const collage = (e) => {
    setCollegestate(e.target.value);
  };
  const completion = (e) => {
    setCompletionstate(e.target.value);
  };
  const experience = (e) => {
    setExperiencestate(e.target.value);
  };
  const practice = (e) => {
    setPracticestate(e.target.value);
  };
  const estname = (e) => {
    setEstnamestate(e.target.value);
  };
  const estcity = (e) => {
    setEstcitystate(e.target.value);
  };
  const estlocality = (e) => {
    setEstLocalitystate(e.target.value);
  };
  const productId = (e) => {
    setProductIdstate(e.target.value);
  };
  const userId = (e) => {
    setUserIdstate(e.target.value);
  };
  const address = (e) => {
    setAddresstate(e.target.value);
  };
  const title = (e) => {
    setTitlestate(e.target.value);
  };
  const image = (e) => {
    setImg(e.target.value);
  };
  const saveDoctoreItem = async () => {
    console.log("route.query.type ::", route.query.type);
    if (route.query.type === "Add") {
      let bodyData = {
        name: namestate,
        specialization: specializationstate,
        gender: genderstate,
        city: citystate,
        registration: registrationstate,
        council: collegestate,
        year: yearstate,
        degree: degreestate,
        collage: collegestate,
        completion: completionstate,
        experience: experiencestate,
        practice: practicestate,
        Estname: estnamestate,
        Estcity: estcitystate,
        Estlocality: estLocalitystate,
      };
      try {
        const response = await fetch("http://localhost:4585/user/doctor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": "<calculated when request is sent>",
          },
          body: JSON.stringify(bodyData),
        });
        let responseJSon = response.json();
        console.log("responseJson::", responseJSon);
        if (response.status === 200) {
          route.push("/Admin/" + route.query.key);
        }
      } catch (error) {
        console.log("error::", error.message);
      }
    } else {
      let bodyData = {
        id: route.query.id,
        name: namestate,
        specialization: specializationstate,
        gender: genderstate,
        city: citystate,
        registration: registrationstate,
        council: collegestate,
        year: yearstate,
        degree: degreestate,
        collage: collegestate,
        completion: completionstate,
        experience: experiencestate,
        practice: practicestate,
        Estname: estnamestate,
        Estcity: estcitystate,
        Estlocality: estLocalitystate,
      };
      try {
        const response = await fetch("http://localhost:4585/user/doctor", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": "<calculated when request is sent>",
          },
          body: JSON.stringify(bodyData),
        });
        let responseJSon = response.json();
        console.log("responseJson::", responseJSon);
        if (response.status === 200) {
          route.push("/Admin/" + route.query.key);
        }
      } catch (error) {
        console.log("error::", error.message);
      }
    }
  };

  const saveorderData = async () => {
    let bodyData = {
      id: route.query.id,
      price: pricestate,
      address: addresstate,
      userId: userIdstate,
      productId: productIdstate,
    };
    console.log("boyData::", bodyData);
    try {
      const response = await fetch("http://localhost:4585/user/order", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": "<calculated when request is sent>",
        },
        body: JSON.stringify(bodyData),
      });
      let responseJSon = await response.json();
      console.log("responseJSon :::", JSON.stringify(responseJSon));
      if (response.status === 200) {
        route.push("/Admin/" + route.query.key);
      }
    } catch (error) {
      console.log("error ::", error);
    }
  };

  const saveBlogData = async () => {
    if (route.query.type === "Add") {
      let bodyData = {
        title: titlestate,
        image: img,
        description: descriptionstate,
      };
      console.log("boyData::", bodyData);
      try {
        const response = await fetch("http://localhost:4585/user/blog", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": "<calculated when request is sent>",
          },
          body: JSON.stringify(bodyData),
        });
        let responseJSon = await response.json();
        console.log("responseJSon :::", JSON.stringify(responseJSon));
        if (response.status === 200) {
          route.push("/Admin/" + route.query.key);
        }
      } catch (error) {
        console.log("error ::", error);
      }
    } else {
      let bodyData = {
        id: route.query.id,
        title: titlestate,
        image: img,
        description: descriptionstate,
      };
      console.log("boyData::", bodyData);
      try {
        const response = await fetch("http://localhost:4585/user/blog", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": "<calculated when request is sent>",
          },
          body: JSON.stringify(bodyData),
        });
        let responseJSon = await response.json();
        console.log("responseJSon :::", JSON.stringify(responseJSon));
        if (response.status === 200) {
          route.push("/Admin/" + route.query.key);
        }
      } catch (error) {
        console.log("error ::", error);
      }
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
          />
        </div>
        <div className="col-10">
          <h1 style={{ marginTop: 30, marginLeft: 30 }}>
            Add {route.query.key} item
          </h1>

          <div
            className="hold-transition sidebar-mini layout-fixed"
            style={{ marginTop: 40, marginLeft: 30 }}
          >
            {route.query.key === "Product" ? (
              <div className="wrapper">
                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter Name
                  </span>
                  <br />
                  <input
                    placeholder="Enter Enter Name"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={namestate}
                    onChange={nameset}
                    // setNamestate(text)}
                    // onChange={(e) =>
                    //   console.log("e:::", JSON.stringify(e.target.value))
                    // }
                  />
                </div>

                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter Description
                  </span>
                  <br />
                  <input
                    placeholder="Enter Description"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={descriptionstate}
                    onChange={description}
                  />
                </div>

                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter Price
                  </span>
                  <br />
                  <input
                    placeholder="Enter Price"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={pricestate}
                    onChange={price}
                  />
                </div>
                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Select Image
                  </span>
                  <br />
                  <div style={{ flexDirection: "row", display: "flex" }}>
                    <button
                      style={{
                        marginTop: 7,
                      }}
                      type="button"
                      className="btn btn-secondary btn-lg btn-block"
                    >
                      Attach File
                    </button>
                    <div style={{ marginTop: 15, marginLeft: 10 }}>
                      <span
                        style={{
                          fontWeight: "500",
                          fontSize: 20,
                        }}
                      >
                        {img !== "" ? img : "No file Selected"}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    marginTop: 30,
                  }}
                >
                  <button
                    style={{ marginRight: 20 }}
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => route.push("/Admin/" + route.query.key)}
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
            ) : route.query.key === "Doctor" ? (
              <div className="wrapper">
                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter Name
                  </span>
                  <br />
                  <input
                    placeholder="Enter Name"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={namestate}
                    onChange={nameset}
                  />
                </div>

                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter Specialization
                  </span>
                  <br />
                  <input
                    placeholder="Enter Specialization"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={specializationstate}
                    onChange={specialization}
                  />
                </div>

                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter Gender
                  </span>
                  <br />
                  <input
                    placeholder="Enter Gender"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={genderstate}
                    onChange={gender}
                  />
                </div>

                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter City
                  </span>
                  <br />
                  <input
                    placeholder="Enter City"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={citystate}
                    onChange={city}
                  />
                </div>

                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter registration
                  </span>
                  <br />
                  <input
                    placeholder="Enter registration"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={registrationstate}
                    onChange={registration}
                  />
                </div>
                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter council
                  </span>
                  <br />
                  <input
                    placeholder="Enter council"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={councilstate}
                    onChange={council}
                  />
                </div>
                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter year
                  </span>
                  <br />
                  <input
                    placeholder="Enter year"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={yearstate}
                    onChange={year}
                  />
                </div>

                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter degree
                  </span>
                  <br />
                  <input
                    placeholder="Enter degree"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={degreestate}
                    onChange={degree}
                  />
                </div>
                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter collage
                  </span>
                  <br />
                  <input
                    placeholder="Enter collage"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={collegestate}
                    onChange={collage}
                  />
                </div>
                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter completion
                  </span>
                  <br />
                  <input
                    placeholder="Enter completion"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={completionstate}
                    onChange={completion}
                  />
                </div>
                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter experience
                  </span>
                  <br />
                  <input
                    placeholder="Enter experience"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={experiencestate}
                    onChange={experience}
                  />
                </div>
                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter practice
                  </span>
                  <br />
                  <input
                    placeholder="Enter practice"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={practicestate}
                    onChange={practice}
                  />
                </div>
                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter estname
                  </span>
                  <br />
                  <input
                    placeholder="Enter completion"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={estnamestate}
                    onChange={estname}
                  />
                </div>
                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter estcity
                  </span>
                  <br />
                  <input
                    placeholder="Enter estcity"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={estcitystate}
                    onChange={estcity}
                  />
                </div>
                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter estlocality
                  </span>
                  <br />
                  <input
                    placeholder="Enter estlocality"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={estLocalitystate}
                    onChange={estlocality}
                  />
                </div>

                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    marginTop: 30,
                  }}
                >
                  <button
                    style={{ marginRight: 20 }}
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => route.push("/Admin/" + route.query.key)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ paddingLeft: 20, paddingRight: 20 }}
                    onClick={() => saveDoctoreItem()}
                  >
                    Save
                  </button>
                </div>
                <br />
              </div>
            ) : route.query.key === "Order" ? (
              <div className="wrapper">
                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter ProductId
                  </span>
                  <br />
                  <input
                    placeholder="Enter ProductId"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={productIdstate}
                    onChange={productId}
                    // setNamestate(text)}
                    // onChange={(e) =>
                    //   console.log("e:::", JSON.stringify(e.target.value))
                    // }
                  />
                </div>

                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter UserId
                  </span>
                  <br />
                  <input
                    placeholder="Enter UserId"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={userIdstate}
                    onChange={userId}
                  />
                </div>

                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter Address
                  </span>
                  <br />
                  <input
                    placeholder="Enter Address"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={addresstate}
                    onChange={address}
                  />
                </div>
                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter Price
                  </span>
                  <br />
                  <input
                    placeholder="Enter Price"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={pricestate}
                    onChange={price}
                  />
                </div>

                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    marginTop: 30,
                  }}
                >
                  <button
                    style={{ marginRight: 20 }}
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => route.push("/Admin/" + route.query.key)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ paddingLeft: 20, paddingRight: 20 }}
                    onClick={() => saveorderData()}
                  >
                    Save
                  </button>
                </div>
                <br />
              </div>
            ) : (
              <div className="wrapper">
                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter Title
                  </span>
                  <br />
                  <input
                    placeholder="Enter Title"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={titlestate}
                    onChange={title}
                    // setNamestate(text)}
                    // onChange={(e) =>
                    //   console.log("e:::", JSON.stringify(e.target.value))
                    // }
                  />
                </div>

                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter Image
                  </span>
                  <br />
                  <input
                    placeholder="Enter Image"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={img}
                    onChange={image}
                  />
                </div>

                <div style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: "500", fontSize: 20 }}>
                    Enter Description
                  </span>
                  <br />
                  <input
                    placeholder="Enter Description"
                    style={{
                      marginTop: 7,
                      borderRadius: 3,
                      width: 300,
                      height: 40,
                      borderColor: "#7e7e7e",
                      borderWidth: 1,
                    }}
                    value={descriptionstate}
                    onChange={description}
                  />
                </div>

                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    marginTop: 30,
                  }}
                >
                  <button
                    style={{ marginRight: 20 }}
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => route.push("/Admin/" + route.query.key)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ paddingLeft: 20, paddingRight: 20 }}
                    onClick={() => saveBlogData()}
                  >
                    Save
                  </button>
                </div>
                <br />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddItem;

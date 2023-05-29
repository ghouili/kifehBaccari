import React, { Fragment, useEffect, useRef, useState } from "react";
import {
  Breadcrumbs,
  Input,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Card,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Cookies from "universal-cookie";

import InputField from "../../../components/inputField/InputField";
import { path } from "../../../utils/Variables";
import { PencilIcon, TrashIcon } from "@heroicons/react/20/solid";

const TABLE_HEAD = ["ISO", ""];

const TABLE_ROWS = [
  {
    iso: "John Michael",
  },
  {
    iso: "Alexa Liras",
  },
  {
    iso: "Laurent Perrier",
  },
];

const Iso = () => {
  const cookies = new Cookies();
  let user = cookies.get('user');

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filterData, setfilterData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [formValues, setFormValues] = useState({
    iso: "",
    userid: user?._id
  });

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = Object.values(item).join(" ").toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilterData(newData);
      setSearch(text);
    } else {
      setfilterData(masterData);
      setSearch(text);
    }
  };

  const handleOpen = () => setOpen(!open);

  const fetchData = async () => {
    const result = await axios.get(`${path}iso`);

    setfilterData(result.data.data);
    setmasterData(result.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const ToggleDialog = () => {
    setOpen(!open);
    setFormValues({
      iso: "",
      userid: user?._id
    });
  };

  const Update_data = async (item) => {
    const willDelete = await swal({
      title: "Are you sure?",
      text: "Are you sure that you want to update this data?",
      icon: "warning",
      dangerMode: true,
    });

    if (willDelete) {
      console.log(item);
      setFormValues(item);
      setOpen(true);
    }
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission

    // console.log(formValues);

    try {
      let url, result;
      if (formValues._id) {
        url = `${path}iso/${formValues._id}`;
        result = await axios.put(url, formValues);
      } else {
        url = `${path}iso/add`;
        result = await axios.post(url, formValues);
      }
      console.log(result);
      if (result.data.success === true) {
        fetchData();
        swal("Success!", result.data.message, "success");
      } else {
        return swal("Error!", result.data.message, "error");
      }
    } catch (error) {
      console.error(error);
      return swal(
        "Error!",
        "Something went wrong. Please try again later.",
        "error"
      );
    }
  };

  const deleteData = async (id) => {
    const willDelete = await swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this Data?",
      icon: "warning",
      dangerMode: true,
    });

    if (willDelete) {
      const result = await axios.delete(`${path}iso/${id}`);

      if (result.data.success) {
        swal("Success!", result.data.message, "success");
        fetchData();
      } else {
        return swal("Error!", result.adta.message, "error");
      }
    }
  };

  return (
    <div className="w-full border mt-4 bg-white p-4 shadow-sm rounded-sm">
      <div className="w-full flex items-center justify-between">
        <Breadcrumbs>
          <Link to="/" className="opacity-60 text-customColor">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
          <Link to="#">ISO</Link>
        </Breadcrumbs>
        <div className="w-fit flex gap-10 items-center">
          <div className="relative flex w-full max-w-[24rem]">
            <Input
              type="search"
              label="Search ISO.."
              value={search}
              onChange={(e) => searchFilter(e.target.value)}
              className="pr-24 border-customColor focus:outline-none"
              containerProps={{
                className: "min-w-0",
              }}
            />
            <Button
              size="sm"
              className="!absolute right-1 top-1 rounded bg-customColor"
            >
              Search
            </Button>
          </div>
          <button
            type="button"
            className="py-1.5 px-3 text-sm font-medium text-customColor focus:outline-none  
            rounded-lg border-2 border-customColor bg-gray-100 hover:bg-customColor hover:text-gray-100 focus:z-10 
            focus:ring-4 focus:ring-gray-200 "
            onClick={handleOpen}
          >
            <span className="flex w-16 justify-center">New</span>
          </button>
        </div>
      </div>

      <div className="mt-10 py-6 px-4">
        <Card className="overflow-scroll h-full w-full">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filterData
                .slice(0)
                .reverse()
                .map(({ _id, iso }, index) => (
                  <tr key={_id} className="even:bg-blue-gray-50/50">
                    <td className="p-4">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {iso}
                      </Typography>
                    </td>

                    <td className="p-4 flex justify-end">
                      <Tooltip content="Edit ISO">
                        <IconButton
                          onClick={() => Update_data({ _id, iso })}
                          variant="text"
                          color="blue-gray"
                        >
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Delete ISO">
                        <IconButton
                          onClick={() => deleteData(_id)}
                          variant="text"
                          color="red"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Card>
      </div>

      <Fragment>
        <Dialog open={open} size="lg" handler={ToggleDialog}>
          <DialogHeader>New Data.</DialogHeader>
          <form onSubmit={handleSubmit}>
            <DialogBody divider>
              <div className="grid grid-cols-2 gap-4 pb-4">
                <InputField
                  type="text"
                  label="ISO:"
                  name="iso"
                  placeholder="ISO..."
                  value={formValues.iso}
                  onChange={handleInputChange}
                />

                {/* Role */}
                {/* <div className="w-96">
                  <label
                    htmlFor="RoleID"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Role:
                  </label>
                  <select
                    name="role"
                    id="RoleID"
                    value={formValues.role}
                    onChange={handleInputChange}
                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
                    sm:text-xs focus:ring-blue-500 focus:border-blue-500 "
                  >
                    <option value="client" selected>
                      Client
                    </option>
                    <option value="admin">Admin</option>
                  </select>
                </div> */}
              </div>
            </DialogBody>
            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={ToggleDialog}
                className="mr-1"
              >
                <span>Cancel</span>
              </Button>
              <Button variant="gradient" color="blue" type="submit">
                <span>Confirm</span>
              </Button>
            </DialogFooter>
          </form>
        </Dialog>
      </Fragment>
    </div>
  );
};

export default Iso;

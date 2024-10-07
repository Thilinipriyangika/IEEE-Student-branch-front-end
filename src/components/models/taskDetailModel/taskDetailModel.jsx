import React, { useEffect, useState } from "react";
import { Modal, Dropdown, DropdownButton } from "react-bootstrap";
import CommonButton from "../../common/commonButton/commonButton";
import CommonMemberContainer from "../../common/commonMemberContainer/commonMemberContainer";
import CommonSearch from "../../common/commonSearch/commonSearch";
import add from "../../../assets/icons/Add.png";
import send from "../../../assets/icons/Sent.png";
import flag from "../../../assets/images/Flag.png";
import star from "../../../assets/images/Star.png";
import deleted from "../../../assets/icons/delete.png";
import loading from "../../../assets/images/Loading.png";
import clock from "../../../assets/images/Clock.png";
import CreateTaskModel from "../createTaskModel/createTaskModel";
import CommonTable from "../../common/commonTable/commonTable";
import CommonNoteContainer from "../../common/commonNoteContainer/commonNoteContainer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const TaskDetailModel = ({ onHide, show, taskData, project, excom }) => {
  if (!taskData) return null;

  const navigate = useNavigate();
  const [assignTask, setAssignTask] = useState(false);
  const [createTask, setCreateTask] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState("High");
  const userData = useSelector((state) => state.user.userData);
  const [pageLoading, setPageLoading] = useState(true);

  const [showTaskModal, setShowTaskModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    setPageLoading(true);
    if (userData && show && excom) {
      const isExcomAvailable = userData?.some((userRoleDetail) =>
        userRoleDetail.role?.policies.some(
          (policy) => policy.policyCode === "EXCOM"
        )
      );

      const isExcomTaskAvailable = userData?.some((userRoleDetail) =>
        userRoleDetail.role?.policies.some(
          (policy) => policy.policyCode === "EXCOM_TASK"
        )
      );

      const isExcomTaskAssignAvailable = userData?.some((userRoleDetail) =>
        userRoleDetail.role?.policies.some(
          (policy) => policy.policyCode === "EXCOM_TASK_ASSIGN"
        )
      );

      if (!isExcomAvailable) {
        navigate("/dashboard");
      } else {
        setAssignTask(isExcomTaskAssignAvailable);
        setCreateTask(isExcomTaskAvailable);
        setPageLoading(false);
      }
    }
  }, [userData, show, excom, navigate]);

  const handlePrioritySelect = (eventKey) => {
    setSelectedPriority(eventKey);
  };

  const handleDateChange = (e) => {};

  const notes = [
    { date: "2023-01-02", author: "Jane Doe", content: "Sample note 2" },
  ];

  const openTaskModal = () => {
    setShowTaskModal(true);
  };

  const closeTaskModal = () => {
    setShowTaskModal(false);
  };

  const tableHeading = [
    { label: "Task Title", value: "Task_title" },
    { label: "Priority", value: "priority" },
    { label: "Due", value: "due" },
    { label: "Status", value: "status" },
    { label: "Action", value: "ACTION", type: ["VIEW"] },
  ];

  const tableData = [];

  return (
    <Modal show={show} onHide={onHide} size="lg" centered fullscreen={true}>
      <Modal.Header closeButton>
        <Modal.Title
          className="text-cl-primary"
          id="contained-modal-title-vcenter"
        >
          Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-lg-8">
            <div>
              <div className="mb-3 d-flex justify-content-between align-items-center">
                <div className="text-cl-primary">
                  Main Task Title / Sub Task Title
                </div>
                {createTask && (
                  <button
                    className="bg-transparent border-0"
                    aria-label="Delete Task"
                  >
                    <img src={deleted} width={25} alt="Delete" />
                  </button>
                )}
              </div>
              <h5>
                <b>Create project banner.</b>
              </h5>
              <div className="d-flex align-items-center mb-3">
                <div className="text-cl-primary mb-1 d-flex align-items-center">
                  <img
                    src={loading}
                    style={{ width: "20px", height: "20px" }}
                    alt="Loading"
                    className="me-2"
                  />
                  <span>Status</span>
                </div>
                <div class=" form-group">
                  <select
                    class="form-control ms-5"
                    id="exampleFormControlSelect1"
                  >
                    <option>Reviewed</option>
                    <option>Pending</option>
                    <option>In progress</option>
                  </select>
                </div>
              </div>
              <div
                className="d-flex justify-content-between align-items-center mb-3"
                style={{ width: "350px" }}
              >
                <div className="col-md-4 text-cl-primary mb-1 d-flex align-items-center">
                  <img
                    src={flag}
                    style={{ width: "25px", height: "25px" }}
                    alt="Flag"
                  />
                  <span>Start Date</span>
                </div>
                <input
                  type="date"
                  className="form-control ms-3"
                  value={taskData.startDate}
                  onChange={handleDateChange}
                />
              </div>
              <div
                className=" d-flex justify-content-between align-items-center mb-3"
                style={{ width: "350px" }}
              >
                <div className="col-md-4 text-cl-primary mb-1 d-flex align-items-center">
                  <img
                    src={flag}
                    style={{ width: "25px", height: "25px" }}
                    alt="Flag"
                  />
                  <span>End Date</span>
                </div>
                <input
                  type="date"
                  className="form-control ms-3"
                  value={taskData.endDate}
                  onChange={handleDateChange}
                />
              </div>
              <div className="d-flex align-items-center mb-3">
                <div className="text-cl-primary mb-1 d-flex align-items-center">
                  <img
                    src={star}
                    style={{ width: "20px", height: "20px" }}
                    alt="Star"
                    className="me-2"
                  />
                  <span>Priority</span>
                </div>
                <div class="form-group">
                  <select
                    class="form-control ms-5"
                    id="exampleFormControlSelect1"
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <div className="text-cl-primary mb-1 d-flex align-items-center">
                  <img
                    src={clock}
                    style={{ width: "25px", height: "25px" }}
                    alt="Clock"
                  />
                  <span className="ms-2">
                    Created at <b>May, 15 2022 14:23 PM</b>
                  </span>
                </div>
              </div>
              <div className="mb-3">
                <div className="text-cl-primary">Description</div>
                <textarea className="form-control" rows="3"></textarea>
              </div>
              <div className="mt-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="text-cl-primary">Sub Tasks</div>
                  {createTask && (
                    <div className="d-flex justify-content-end">
                      <img
                        src={add}
                        alt="Add"
                        style={{
                          width: "30px",
                          height: "30px",
                          cursor: "pointer",
                        }}
                        onClick={openTaskModal}
                      />
                    </div>
                  )}
                </div>
                <div className="d-flex">
                  <CommonSearch primary={true} />
                </div>
                <div className="mt-4">
                  <CommonTable
                    tableHeading={tableHeading}
                    primary={true}
                    tableData={tableData}
                    loading={false}
                    viewAction={() => {
                      // navigateToProject(id);
                    }}
                    editAction={() => {
                      // editProject(id);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bg-white rounded-3 common-shadow p-3">
              <div className="bg-white common-shadow p-2 rounded-3 mb-2">
                <h6 className="text-third fw-bold">Notes</h6>
                <div className="p-2">
                  <CommonSearch primary={false} />
                </div>
                {notes.map((note, index) => (
                  <div className="p-2" key={index}>
                    <CommonNoteContainer
                      date={note.date}
                      author={note.author}
                      content={note.content}
                    />
                  </div>
                ))}
                <div className="mt-3">
                  <div className="d-flex justify-content-between align-items-center gap-3">
                    <div className="form-group w-100">
                      <textarea
                        className="form-control"
                        placeholder="Add note here"
                      ></textarea>
                    </div>
                    <button className="bg-transparent border-0">
                      <img src={send} width={30} alt="Send" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex bg-white common-shadow flex-column p-2 rounded-3">
                <div className="d-flex justify-content-between align-items-center gap-4 flex-wrap mt-4 p-2">
                  <div className="d-flex justify-content-between w-100 align-items-center">
                    <h6 className="text-third fw-bold">Assignees</h6>
                    {assignTask && (
                      <img
                        src={add}
                        alt="Add"
                        style={{ width: "30px", height: "30px" }}
                      />
                    )}
                  </div>
                </div>
                <div className="mt-3">
                  <CommonSearch primary={false} />
                </div>
                <div
                  className="mt-4 d-flex justify-content-between align-items-center gap-1 flex-wrap overflow-scroll overflow-x-hidden custom-scrollbar"
                  style={{ maxHeight: 500 }}
                >
                  <CommonMemberContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-end mt-3">
        <CommonButton onClick={onHide} close={true} text={"Cancel"} />
      </Modal.Footer>
      <CreateTaskModel show={showTaskModal} onHide={closeTaskModal} />
    </Modal>
  );
};

export default TaskDetailModel;

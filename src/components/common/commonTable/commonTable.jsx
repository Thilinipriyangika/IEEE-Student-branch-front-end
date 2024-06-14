import React from 'react'
import financeIncome from '../../../assets/icons/financeIncome.png'
import financeExpence from '../../../assets/icons/financeExpence.png'
import editPrimary from '../../../assets/icons/editPrimary.png'
import viewPrimary from '../../../assets/icons/viewPrimary.png'
import deleteicon from '../../../assets/icons/delete.png'
import viewDark from '../../../assets/icons/darkView.png'
import editDark from '../../../assets/icons/darkEdit.png'
import CommonStatusContainer from '../commonStatusContainer/commonStatusContainer'


const CommonTable = ({ tableHeading, tableData, finance, primary, viewAction, editAction, deleteAction }) => {

    return (
        <div className='table-responsive'>
            <table className="table table-hover">
                <thead>
                    <tr>
                        {tableHeading?.map((item) => {
                            return (
                                <th scope="col" className={`${primary ? "bag-primary text-white" : finance ? "white text-cl-primary" : "bg-third text-white"}`}>{item.lable}</th>
                            )
                        })}

                    </tr>
                </thead>
                <tbody>
                    {tableData?.map((item, index) => {
                        return (
                            <tr key={index}>
                                {tableHeading?.map((head, headIndex) => {
                                    if (head.value === "ACTION") {
                                        // Render buttons for actions
                                        return (
                                            <td key={headIndex}>
                                                {head.type.map((action, actionIndex) => {
                                                    let iconSrc = null;
                                                    let actionFunction = null;

                                                    if (action === "VIEW") {
                                                        iconSrc = primary || finance ? viewPrimary : viewDark;
                                                        actionFunction = viewAction;
                                                    } else if (action === "EDIT") {
                                                        iconSrc = primary || finance ? editPrimary : editDark;
                                                        actionFunction = editAction;
                                                    } else if (action === "DELETE") {
                                                        iconSrc = deleteicon;
                                                        actionFunction = deleteAction;
                                                    }

                                                    return (
                                                        <button key={actionIndex} className='border-0 bg-transparent' onClick={actionFunction}>
                                                            <img src={iconSrc} style={{ width: 24 }} />
                                                        </button>
                                                    );
                                                })}
                                            </td>
                                        );
                                    } else if (finance) {
                                        // Render finance-related content
                                        if (head.value === "STARTIMAGE") {
                                            return (
                                                <td key={headIndex}>
                                                    <img
                                                        src={item.type === "INCOME" ? financeIncome : financeExpence}
                                                        style={{ width: 24 }}
                                                        alt={item.type === "INCOME" ? "Income" : "Expense"}
                                                    />
                                                </td>
                                            );
                                        } else if (head.value === "amount") {
                                            return (
                                                <td key={headIndex}>
                                                    {item.type === "INCOME" ? (
                                                        <div style={{ color: "#16DBAA" }}>+{item[head.value]}</div>
                                                    ) : (
                                                        <div style={{ color: "#FE5C73" }}>-{item[head.value]}</div>
                                                    )}
                                                </td>
                                            );
                                        } else if (head.value === "status") {
                                            return (
                                                <td key={headIndex}>
                                                    <CommonStatusContainer status={item[head.value]} />
                                                </td>
                                            );
                                        } else {
                                            return (
                                                <td key={headIndex}>
                                                    {item[head.value]}
                                                </td>
                                            );
                                        }
                                    } else if (head.value === "status") {
                                        // Render status using CommonStatusContainer when finance is false
                                        return (
                                            <td key={headIndex}>
                                                <CommonStatusContainer status={item[head.value]} />
                                            </td>
                                        );
                                    } else {
                                        // Render regular item value
                                        return (
                                            <td key={headIndex}>
                                                {item[head.value]}
                                            </td>
                                        );
                                    }
                                })}
                            </tr>
                        );
                    })}
                </tbody>

            </table>
        </div>

    )
}

export default CommonTable

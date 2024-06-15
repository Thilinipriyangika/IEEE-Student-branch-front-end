import React from 'react'
import logo from '../../../assets/images/logo.png'
import CommonTable from '../../../components/common/commonTable/commonTable'
import CommonButton from '../../../components/common/commonButton/commonButton'
import { usePDF } from 'react-to-pdf';

const ReportPage = () => {

    const { toPDF, targetRef } = usePDF({filename: 'report.pdf'});

    const tableHeading = [
        {
            lable: "Date",
            value: "date"
        },
        {
            lable: "Transection Details",
            value: "TRANSECTION"
        },
        {
            lable: "Credit",
            value: "CREDIT"
        },
        {
            lable: "Debit",
            value: "DEBIT"
        },
    ]

    const tableData = [
        {
            id: "P001",
            title: "UX Strategy",
            description: "Create and send unlimited professional invoices for free. Use our unique features to collect payments faster.",
            date: "2022/12/11",
            type: "CREDIT",
            amount: "2500.00",
        },
        {
            id: "P001",
            title: "UX Strategy",
            description: "Create and send unlimited professional invoices for free. Use our unique features to collect payments faster.",
            date: "2022/12/11",
            type: "DEBIT",
            amount: "2500.00",
        }, {
            id: "P001",
            title: "UX Strategy",
            description: "Create and send unlimited professional invoices for free. Use our unique features to collect payments faster.",
            date: "2022/12/11",
            type: "CREDIT",
            amount: "2500.00",
        },
        {
            id: "P001",
            title: "UX Strategy",
            description: "Create and send unlimited professional invoices for free. Use our unique features to collect payments faster.",
            date: "2022/12/11",
            type: "DEBIT",
            amount: "2500.00",
        }, {
            id: "P001",
            title: "UX Strategy",
            description: "Create and send unlimited professional invoices for free. Use our unique features to collect payments faster.",
            date: "2022/12/11",
            type: "CREDIT",
            amount: "2500.00",
        },
        {
            id: "P001",
            title: "UX Strategy",
            description: "Create and send unlimited professional invoices for free. Use our unique features to collect payments faster.",
            date: "2022/12/11",
            type: "DEBIT",
            amount: "2500.00",
        }, {
            id: "P001",
            title: "UX Strategy",
            description: "Create and send unlimited professional invoices for free. Use our unique features to collect payments faster.",
            date: "2022/12/11",
            type: "CREDIT",
            amount: "2500.00",
        },
        {
            id: "P001",
            title: "UX Strategy",
            description: "Create and send unlimited professional invoices for free. Use our unique features to collect payments faster.",
            date: "2022/12/11",
            type: "DEBIT",
            amount: "2500.00",
        }


    ]


    return (
        <>
            <div className='d-flex justify-content-end'><div><CommonButton onClick={() => toPDF()} text={"Download"} /></div></div>
            <div className='mb-5 p-5' ref={targetRef}>
                <div className='d-flex justify-content-end'>
                    <div className='row align-items-center gap-3 justify-content-center'>
                        <div className='col-md-5'>
                            <div className="input-group input-group-sm">
                                <input type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                        </div>

                        <div className='col-md-1 text-center'>
                            to
                        </div>
                        <div className='col-md-5'>
                            <div className="input-group input-group-sm">
                                <input type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-5 d-flex justify-content-between'>
                    <div className='flex flex-column'>
                        <div>
                            <h4>Invoice</h4>
                        </div>
                        <div className='d-flex mt-2 gap-5 justify-content-between'>
                            <div className='text-black-50'>Invoice Date</div>
                            <div><h6>Sep 24, 2023</h6></div>
                        </div>
                        <div className='d-flex  mt-2 gap-5 justify-content-between'>
                            <div className='text-black-50'>Due Date</div>
                            <div><h6>Sep 30, 2023</h6></div>
                        </div>
                        <div className='d-flex  mt-2 gap-5 justify-content-between'>
                            <div className='text-black-50'>Initial Amount</div>
                            <div><h6>LKR 12000.00</h6></div>
                        </div>
                    </div>
                    <div className='d-flex flex-column justify-content-between'>
                        <img src={logo} style={{ width: 200 }} />
                    </div>
                </div>

                <div className='mt-4'>
                    <CommonTable tableHeading={tableHeading} finance={true} report={true} tableData={tableData} primary={true} loading={false} />
                </div>

                <div className='mt-5 d-flex justify-content-end'>
                    <div className='flex flex-column' style={{ minWidth: 320 }}>
                        <div className='d-flex  mt-2 gap-5 justify-content-between'>
                            <div className='text-black-50'>Initial Amount</div>
                            <div><h6>1200000.00</h6></div>
                        </div>
                        <div className='d-flex  mt-2 gap-5 justify-content-between'>
                            <div className='text-black-50'>Credit</div>
                            <div><h6 style={{ color: "#16DBAA" }}>+12000.00</h6></div>
                        </div>
                        <div className='d-flex  mt-2 gap-5 justify-content-between'>
                            <div className='text-black-50'>Debit</div>
                            <div><h6 style={{ color: "#FE5C73" }}>-12000.00</h6></div>
                        </div>
                        <hr className='text-black-50' />
                        <div className='d-flex  mt-2 gap-5 justify-content-between'>
                            <div className='h4'>Balance</div>
                            <div><h4>12000.00</h4></div>
                        </div>
                        <hr className='text-black-50' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReportPage

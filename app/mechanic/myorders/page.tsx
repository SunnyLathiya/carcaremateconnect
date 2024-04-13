// // "use client"
// // import React, { useState, useEffect } from "react";
// // import MaterialTable, { Column } from "material-table";


// // interface Order {
// //   _id: string;
// //   customerName: string;
// //   carName: string;
// //   carNumber: string;
// //   custAddress: string;
// //   serviceName: string;
// //   servicePrice: number;
// //   status: string;
// // }

// // function MyOrders() {
// //   const [orders, setOrders] = useState<Order[]>([]);


// //   const columns: Column<Order>[] = [
// //     { title: "OrderId", field: "_id" },
// //     { title: "Customer Name", field: "customerName" },
// //     { title: "Car Name", field: "carName" },
// //     { title: "Car Number", field: "carNumber" },
// //     { title: "Address", field: "custAddress" },
// //     { title: "Service Name", field: "serviceName" },
// //     { title: "Price", field: "servicePrice" },
// //     { title: "Status", field: "status" },
// //   ];

// //   return (
// //     <div className="cars_container">
// //       <MaterialTable
// //         title="MY ORDERS DATA"
// //         columns={columns}
// //         data={orders}
// //         options={{
// //           headerStyle: {
// //             backgroundColor: "#01579b",
// //             color: "#FFF",
// //           },
// //           exportButton: true,
// //         }}
// //       />
// //     </div>
// //   );
// // }

// // export default MyOrders;


// // 'use client'
// // import React, { useCallback, useEffect, useState } from 'react'
// // import {
// // 	IconButton,
// // 	Box,
// // 	Tooltip,
// // 	CircularProgress,
// // 	TextField,
// // 	Dialog,
// // 	DialogTitle,
// // 	DialogContent,
// // 	DialogActions,
// // 	Button,
// // } from '@mui/material'

// // // import './studentTable.scss'
// // import { useRouter } from 'next/navigation'
// // // import FormModel from '../FormModel/FormModel'
// // // import { useSelector } from 'react-redux'
// // // import { StoreState } from '@/lib/store/store'
// // // import { useAppDispatch } from '@/lib/hooks/hooks'
// // import { ToastContainer, toast } from 'react-toastify'
// // import {
// // 	DataGrid,
// // 	GridToolbarColumnsButton,
// // 	GridToolbarContainer,
// // 	GridToolbarDensitySelector,
// // 	GridToolbarExport,
// // 	GridToolbarFilterButton,
// // } from '@mui/x-data-grid'
// // // import {
// // // 	deleteStudent,
// // // 	clearSelectedStudent,
// // // 	searchStudents,
// // // } from '@/lib/student-slice'
// // import Image from 'next/image'
// // // import showBtnIcon from '../../assets/showBtnIcon.svg'
// // // import editBtnIcon from '../../assets/editBtnIcon.svg'
// // // import deleteBtnIcon from '../../assets/deleteBtnIcon.svg'
// // import ClearIcon from '@mui/icons-material/Clear'
// // // import dataGridDownArrowIcon from '../../assets/dataGridDownArrowIcon.svg'

// // function capitalizeFirstLetter(str: string) {
// // 	return str ? str[0].toUpperCase() + str.slice(1) : ''
// // }
// // export default function StudentTable() {
// // 	const router = useRouter()
// // 	// const dispatch = useAppDispatch()
// // 	// const studentsData = useSelector(
// // 	// 	(state: StoreState) => state.student.filteredstudents
// // 	// )
// // 	const [searchData, setSearchData] = useState<string>('')
// // 	const [editData, setEditData] = useState<string | null>(null)
// // 	const [isLoading, setIsLoading] = useState(true)
// // 	const [openDeleteModal, setOpenDeleteModal] = useState(false)
// // 	const [deleteStudentId, setDeleteStudentId] = useState<string | null>(null)

// // 	const columns = [
// // 		{ field: 'name', headerName: 'Name', flex: 1, minWidth: 200 },
// // 		{ field: 'email', headerName: 'Email', flex: 1, minWidth: 150 },
// // 		{ field: 'contactNumber', headerName: 'Contact', flex: 1, minWidth: 150 },
// // 		{ field: 'gender', headerName: 'Gender', flex: 1, minWidth: 150 },
// // 		{ field: 'collegeName', headerName: 'College', flex: 1, minWidth: 150 },
// // 		{ field: 'department', headerName: 'Department', flex: 1, minWidth: 150 },
// // 		{ field: 'hobbies', headerName: 'Hobbies', flex: 1, minWidth: 150 },
// // 		{ field: 'dob', headerName: 'DOB', flex: 1, minWidth: 150 },
// // 		{
// // 			field: 'actions',
// // 			headerName: 'Actions',
// // 			flex: 1,
// // 			minWidth: 150,
// // 			hideable: false,
// // 			renderCell: (params: any) => (
// // 				<div className='btn-group-wrap'>
// // 					<Tooltip title='Show'>
// // 						<IconButton 
// //                         // onClick={(e) => handleRowClick(params?.id)}
// //                         >
// // 							{/* <Image src={showBtnIcon} alt='showBtnIcon' /> */}
// //                             <button>+</button>
// // 						</IconButton>
// // 					</Tooltip>
// // 					<Tooltip title='Edit'>
// // 						<IconButton 
// //                         // onClick={(e) => handleEditClick(params?.id)}
// //                         >
// // 							{/* <Image src={editBtnIcon} alt='editBtnIcon' /> */}
// //                             <button>+</button>
// // 						</IconButton>
// // 					</Tooltip>
// // 					<Tooltip title='Delete'>
// // 						<IconButton 
// //                         // onClick={(e) => handleDeleteClick(params?.id)}
// //                         >
// // 							{/* <Image src={deleteBtnIcon} alt='deleteBtnIcon' /> */}
// //                             <button>+</button>
// // 						</IconButton>
// // 					</Tooltip>
// // 				</div>
// // 			),
// // 		},
// // 	]
// // 	// const rowsForDataGrid = studentsData
// // 	// 	?.map((row) => ({
// // 	// 		id: row._id,
// // 	// 		name: `${capitalizeFirstLetter(row.lastName!)} ${capitalizeFirstLetter(
// // 	// 			row.firstName!
// // 	// 		)}`,
// // 	// 		email: row.email,
// // 	// 		contactNumber: row.contactNumber,
// // 	// 		gender: row.gender,
// // 	// 		collegeName: row.collegeName,
// // 	// 		department: row.department,
// // 	// 		hobbies: row.hobbies,
// // 	// 		dob: row.dob,
// // 	// 	}))
// // 	// 	.reverse()

// // 	// useEffect(() => {
// // 	// 	dispatch(clearSelectedStudent())
// // 	// 	setIsLoading(false)
// // 	// }, [studentsData])
// // 	// useEffect(() => {
// // 	// 	dispatch(searchStudents(searchData))
// // 	// }, [searchData])

// // 	// const handleEditClick = useCallback(
// // 	// 	(data: string) => {
// // 	// 		setEditData(data!)
// // 	// 	},
// // 	// 	[] // Empty dependency array as it doesn't depend on external variables
// // 	// )

// // 	// const handleDeleteClick = useCallback((id: string) => {
// // 	// 	setDeleteStudentId(id)
// // 	// 	setOpenDeleteModal(true)
// // 	// }, [])

// // 	// const handleDeleteConfirm = useCallback(async () => {
// // 	// 	try {
// // 	// 		dispatch(deleteStudent(deleteStudentId!))
// // 	// 		toast.success('Student Deleted Successfully')
// // 	// 		setOpenDeleteModal(false)
// // 	// 	} catch (error) {
// // 	// 		console.error('Error deleting student:', error)
// // 	// 		toast.error('Failed to delete student')
// // 	// 	}
// // 	// }, [dispatch, deleteStudentId])

// // 	// const handleDeleteCancel = useCallback(() => {
// // 	// 	setOpenDeleteModal(false)
// // 	// }, [])

// // 	// const handleRowClick = useCallback(
// // 	// 	(id: string) => {
// // 	// 		router.push(`/${id}`)
// // 	// 	},
// // 	// 	[router]
// // 	// )

// // 	// function CustomToolbar() {
// // 	// 	return (
// // 	// 		<div>
// // 	// 			<button onClick={() => console.log('Custom button clicked')}>
// // 	// 				Custom Button
// // 	// 			</button>
// // 	// 		</div>
// // 	// 	)
// // 	// }

// // 	// return (
// // 	// 	<>   <div style={{marginTop:"100px", marginLeft:"100px"}}>
// // 	// 		<ToastContainer />
// // 	// 		<Box>
// // 	// 			{/* <FormModel /> */}
// // 	// 		</Box>
// // 	// 		{/* <Container fixed maxWidth='xl'> */}
// // 	// 		{isLoading ? (
// // 	// 			<div className='loader'>
// // 	// 				<CircularProgress />
// // 	// 			</div>
// // 	// 		) : (
// // 	// 			<>
// // 	// 				<div className='table-wrapper'>
// // 	// 					<DataGrid
// // 	// 						rowHeight={40}
// // 	// 						columnHeaderHeight={40}
// // 	// 						// rows={rowsForDataGrid}
// // 	// 						columns={columns}
// // 	// 						slots={{
// // 	// 							toolbar: () => (
// // 	// 								<div className='student-inputwrap'>
// // 	// 									<GridToolbarContainer>
// // 	// 										<GridToolbarColumnsButton
											
// // 	// 										/>
// // 	// 										<GridToolbarFilterButton />
// // 	// 										<GridToolbarDensitySelector
											
// // 	// 										/>
// // 	// 										<GridToolbarExport
												
											
// // 	// 										/>
// // 	// 										<TextField
// // 	// 											autoFocus
// // 	// 											sx={{ mt: 1 }}
// // 	// 											label='Search'
// // 	// 											variant='outlined'
// // 	// 											value={searchData}
// // 	// 											onChange={(e) => setSearchData(e.target.value)}
// // 	// 											InputProps={{
// // 	// 												endAdornment: searchData && (
// // 	// 													<IconButton
// // 	// 														onClick={() => setSearchData('')}
// // 	// 														edge='end'
// // 	// 													>
// // 	// 														<ClearIcon fontSize='small' />
// // 	// 													</IconButton>
// // 	// 												),
// // 	// 											}}
// // 	// 										/>
// // 	// 									</GridToolbarContainer>
// // 	// 								</div>
// // 	// 							),
// // 	// 						}}
// // 	// 						pagination
// // 	// 					/>
// // 	// 				</div>
// // 	// 				<Dialog
// // 	// 					open={openDeleteModal}
// // 	// 					// onClose={handleDeleteCancel}
// // 	// 					fullWidth
// // 	// 					maxWidth='sm'
// // 	// 				>
// // 	// 					<DialogTitle className='dialogbox-delete'>Delete</DialogTitle>
// // 	// 					<DialogContent>
// // 	// 						<DialogContent>
// // 	// 							Are you sure you want to delete this student?
// // 	// 						</DialogContent>
// // 	// 					</DialogContent>
// // 	// 					<DialogActions>
// // 	// 						<Button 
// //     //                         // onClick={handleDeleteCancel}
// //     //                          color='primary'>
// // 	// 							Cancel
// // 	// 						</Button>
// // 	// 						<Button
// // 	// 							// onClick={handleDeleteConfirm}
// // 	// 							style={{ backgroundColor: '#f44336', color: '#fff' }}
// // 	// 						>
// // 	// 							Delete
// // 	// 						</Button>
// // 	// 					</DialogActions>
// // 	// 				</Dialog>
// // 	// 			</>
// // 	// 		)}
// // 	// 		{/* {editData && <FormModel id={editData} onClose={setEditData} />} */}

// //     //         </div>
// // 	// 	</>
// // 	// )
// // }





// import React, { useState, useEffect } from "react";
// import MechanicOrders from "../../../services/member/Mechanic/Mechanic_Orders";
// import AuthService from "../../../services/member/auth_service";
// import { useSnackbar } from "notistack";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

// interface Order {
//   _id: string;
//   customerName: string;
//   carName: string;
//   carNumber: string;
//   custAddress: string;
//   serviceName: string;
//   servicePrice: number;
//   status: string;
// }

// function FindOrders() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const { enqueueSnackbar } = useSnackbar();

// //   useEffect(() => {
// //     const mechanic = AuthService.getCurrentMechanic();
// //     MechanicOrders.getInProcessOrders(mechanic.userId)
// //       .then((response) => {
// //         setOrders(response);
// //       })
// //       .catch((err) => {
// //         console.log(err);
// //       });
// //   }, []);

//   const dynamicMechanicsLookUp = {
//     ACCEPTED: "ACCEPTED",
//     REJECT: "REJECTED",
//     COMPLETED: "COMPLETED",
//   };

// //   const handleRowUpdate = (newData: Order, oldData: Order | undefined) => {
// //     if (!oldData) return; // Old data not found

// //     MechanicOrders.updateOrder(newData._id, newData.status)
// //       .then((res) => {
// //         const updatedOrders = orders.map((order) => (order._id === newData._id ? newData : order));
// //         setOrders(updatedOrders);
// //         enqueueSnackbar(res, { variant: "success" });
// //       })
// //       .catch((error) => {
// //         enqueueSnackbar("Update failed! Server error", { variant: "error" });
// //       });
// //   };

//   return (
//     <div className="cars_container">
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>OrderId</TableCell>
//               <TableCell>Customer Name</TableCell>
//               <TableCell>Car Name</TableCell>
//               <TableCell>Car Number</TableCell>
//               <TableCell>Address</TableCell>
//               <TableCell>Service Name</TableCell>
//               <TableCell>Price</TableCell>
//               <TableCell>Status</TableCell>
//             </TableRow>
//           </TableHead> 
//           <TableBody>
//             {orders.map((order) => (
//               <TableRow key={order._id}>
//                 <TableCell>{order._id}</TableCell>
//                 <TableCell>{order.customerName}</TableCell>
//                 <TableCell>{order.carName}</TableCell>
//                 <TableCell>{order.carNumber}</TableCell>
//                 <TableCell>{order.custAddress}</TableCell>
//                 <TableCell>{order.serviceName}</TableCell>
//                 <TableCell>{order.servicePrice}</TableCell>
//                 <TableCell>{order.status}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }

// export default FindOrders;


"use client"
import React, { useState, useEffect } from "react";
// import MechanicOrders from "../../../services/member/Mechanic/Mechanic_Orders";
// import AuthService from "../../../services/member/auth_service";
import { useSnackbar } from "notistack";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

interface Order {
  _id: string;
  customerName: string;
  carName: string;
  carNumber: string;
  custAddress: string;
  serviceName: string;
  servicePrice: number;
  status: string;
}

function MyOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const { enqueueSnackbar } = useSnackbar();

//   useEffect(() => {
//     const mechanic = AuthService.getCurrentMechanic();
//     MechanicOrders.getAllOrders(mechanic.userId)
//       .then((response) => {
//         setOrders(response);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

  const [columns, setColumns] = useState([
    { title: "OrderId", field: "_id" },
    { title: "Customer Name", field: "customerName" },
    { title: "Car Name", field: "carName" },
    { title: "Car Number", field: "carNumber" },
    { title: "Address", field: "custAddress" },
    { title: "Service Name", field: "serviceName" },
    { title: "Price", field: "servicePrice" },
    { title: "Status", field: "status" },
  ]);

  return (
    <div style={{marginTop:"150px", marginLeft:"150px"}}
    className="cars_container"
    >
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.field}>{column.title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order._id}>
                {columns.map((column) => (
                  <TableCell key={column.field}>
                    {/* {order[column.field]} */}
                    hello.............
                    </TableCell>
                    
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MyOrders;


'use client';

import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { getProducts, productSelector } from '@/store/slices/productSlice';
import { useAppDispatch } from '@/store/store';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { productImageURL } from '@/utils/commonUtil';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { NumericFormat } from 'react-number-format';
import dayjs from 'dayjs';
import {
  Add,
  AddShoppingCart,
  AssignmentReturn,
  Delete,
  Edit,
  NewReleases,
  Star,
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { userSelector } from '@/store/slices/userSlice';
import StockCard from '@/app/ui/common/StockCard';

// const columns: GridColDef[] = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   {
//     field: 'image',
//     headerName: 'Image',
//     width: 70,
//     renderCell: ({ value }: GridRenderCellParams<String>) => (
//       // <b>{value}</b>
//       <Zoom>
//         <Image
//           key={value}
//           height={500}
//           width={500}
//           alt="product image"
//           src={productImageURL(value)}
//           style={{
//             width: 70,
//             height: 70,
//             borderRadius: '5%',
//             objectFit: 'cover',
//           }}
//         />
//       </Zoom>
//     ),
//   },
//   { field: 'name', headerName: 'Name', width: 350 },
//   {
//     field: 'price',
//     headerName: 'Price',
//     width: 130,
//     renderCell: ({ value }: GridRenderCellParams<String>) => (
//       <Typography variant="body1">
//         <NumericFormat
//           value={value}
//           displayType={'text'}
//           thousandSeparator={true}
//           decimalScale={0}
//           fixedDecimalScale={true}
//         />
//       </Typography>
//     ),
//   },
//   { field: 'stock', headerName: 'Stock', width: 130 },
//   {
//     field: 'createdAt',
//     headerName: 'Timestamp',
//     width: 230,
//     renderCell: ({ value }) => (
//       <Typography variant="body1">
//         {dayjs(value).format('DD/MM/YYYY HH:mm')}
//       </Typography>
//     ),
//   },
//   {
//     headerName: 'ACTION',
//     field: '.',
//     width: 120,
//     renderCell: ({ row }: GridRenderCellParams<any>) => (
//       <Stack direction="row">
//         <IconButton
//           aria-label="edit"
//           size="large"
//           // onClick={() => router.push(`/stock/edit?id=${row.id}`)}
//         >
//           <Edit fontSize="inherit" />
//         </IconButton>
//         <IconButton
//           aria-label="delete"
//           size="large"
//           // onClick={() => {
//           //   setSelectedProduct(row);
//           //   setOpenDialog(true);
//           // }}
//         >
//           <Delete fontSize="inherit" />
//         </IconButton>
//       </Stack>
//     ),
//   },
//   // {
//   //   field: 'age',
//   //   headerName: 'Age',
//   //   type: 'number',
//   //   width: 90,
//   // },
//   // {
//   //   field: 'fullName',
//   //   headerName: 'Full name',
//   //   description: 'This column has a value getter and is not sortable.',
//   //   sortable: false,
//   //   width: 160,
//   //   valueGetter: (params: GridValueGetterParams) =>
//   //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   // },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

export default function Stock() {
  // const productReducer = useSelector((state: any) => state.productReducer);
  const userReducer = useSelector(userSelector);
  const productReducer = useSelector(productSelector);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'image',
      headerName: 'Image',
      width: 70,
      renderCell: ({ value }: GridRenderCellParams<String>) => (
        // <b>{value}</b>
        <Zoom>
          <Image
            key={value}
            height={500}
            width={500}
            alt="product image"
            src={productImageURL(value)}
            style={{
              width: 70,
              height: 70,
              borderRadius: '5%',
              objectFit: 'cover',
            }}
          />
        </Zoom>
      ),
    },
    { field: 'name', headerName: 'Name', width: 350 },
    {
      field: 'price',
      headerName: 'Price',
      width: 130,
      renderCell: ({ value }: GridRenderCellParams<String>) => (
        <Typography variant="body1">
          <NumericFormat
            value={value}
            displayType={'text'}
            thousandSeparator={true}
            decimalScale={0}
            fixedDecimalScale={true}
          />
        </Typography>
      ),
    },
    { field: 'stock', headerName: 'Stock', width: 130 },
    {
      field: 'createdAt',
      headerName: 'Timestamp',
      width: 230,
      renderCell: ({ value }) => (
        <Typography variant="body1">
          {dayjs(value).format('DD/MM/YYYY HH:mm')}
        </Typography>
      ),
    },
    {
      headerName: 'ACTION',
      field: '.',
      width: 120,
      renderCell: ({ row }: GridRenderCellParams<any>) => (
        <Stack direction="row">
          <IconButton
            aria-label="edit"
            size="large"
            onClick={() => router.push(`/stock/edit?id=${row.id}`)}
          >
            <Edit fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="delete"
            size="large"
            onClick={() => {
              // setSelectedProduct(row);
              // setOpenDialog(true);
              setOpen(true);
            }}
          >
            <Delete fontSize="inherit" />
          </IconButton>
        </Stack>
      ),
    },
  ];

  useEffect(() => {
    if (!userReducer.isAuthenticating) {
      dispatch(getProducts());
    }
    // return () => {
    //   if (userReducer.isAuthenticated) {
    //     dispatch(getProducts());
    //   }
    // };
  }, [dispatch, userReducer.isAuthenticating]);

  const CustomToolbar: React.FunctionComponent<{
    setFilterButtonEl: React.Dispatch<
      React.SetStateAction<HTMLButtonElement | null>
    >;
  }> = ({ setFilterButtonEl }) => (
    <GridToolbarContainer>
      <GridToolbarFilterButton ref={setFilterButtonEl} />
      <Link href="/stock/add">
        <Fab
          color="primary"
          aria-label="add"
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
          }}
        >
          <Add />
        </Fab>
      </Link>
    </GridToolbarContainer>
  );

  const handleClose = () => {
    setOpen(false);
  };

  const showDemoDialog = () => {
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      {/* Cards */}
      <Grid container style={{ marginBottom: 16 }} spacing={7}>
        <Grid item lg={3} md={6} sm={12}>
          <StockCard
            // icon={() => <Button>Test</Button>}
            icon={AddShoppingCart}
            title="TOTAL"
            subtitle="112 THB"
            color="#00a65a"
          />
        </Grid>

        <Grid item lg={3} md={6} sm={12}>
          <StockCard
            icon={NewReleases}
            title="EMPTY"
            subtitle="9 PCS."
            color="#f39c12"
          />
        </Grid>

        <Grid item lg={3} md={6} sm={12}>
          <StockCard
            icon={AssignmentReturn}
            title="RETURN"
            subtitle="1 PCS."
            color="#dd4b39"
          />
        </Grid>

        <Grid item lg={3} md={6} sm={12}>
          <StockCard
            icon={Star}
            title="LOSS"
            subtitle="5 PCS."
            color="#00c0ef"
          />
        </Grid>
      </Grid>

      {/* Table */}
      <DataGrid
        sx={{ backgroundColor: 'white', height: '70vh' }}
        // rows={rows}
        rows={productReducer.products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        // checkboxSelection
        slots={{
          toolbar: CustomToolbar,
        }}
      />

      {showDemoDialog()}
    </Box>
  );
}

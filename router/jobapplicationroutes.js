import express from 'express'

const router=express.Router();
import {applyjob, getapplicationsoflogineduser, updateapplication, deleteapplication, getapplicationofparticularjob} from '../controller/jobapplicationcontroller.js';


router.post('/apply/:jobid/:userid',applyjob);
router.get('/applications/:userid',getapplicationsoflogineduser);
router.get('/applicationsofjob/:jobid',getapplicationofparticularjob);
router.put('/updateapplication/:id',updateapplication);
router.delete('/deleteapplication/:id',deleteapplication);

export default router
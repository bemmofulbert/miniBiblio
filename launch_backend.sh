#!/bin/bash

sudo /opt/lampp/lampp startmysql
sleep 2
cd backend
npm start

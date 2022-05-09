'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed

var courseSchema = Schema( {
    author: String,
    country: String,
    language: String,
    link: String,
    pages: Number,
    title: String,
} );

module.exports = mongoose.model( 'Course', courseSchema );

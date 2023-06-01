import { NextResponse } from "next/server";
import courses from "../data.json";

export async function GET(request){
const {searchParams}=new URL(request.url);
// console.log(request.url)
// console.log(searchParams)
// console.log(searchParams.get("query"))
// if we try a query url like http://localhost:3000/api/courses/search?query=react so line 6 will give us exactly whole url and line 7 will only give us query=react
//line 8 will give specific query note=here query in get method is just a string ,it can be name ,id or anything

const query = searchParams.get("query");
const filteredCouses = courses.filter((courses)=>{
    return courses.title.toLowerCase().includes(query.toLowerCase())
})
return NextResponse.json(filteredCouses);
//so here whatever we search will return only that particular course
}
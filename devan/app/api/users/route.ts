

import { NextRequest, NextResponse } from 'next/server';









const initialTasks = [
    { id: 1, title: "task1" },
    { id: 2, title: "task2" },
    { id: 3, title: "task3" },
  ];


export async function GET() {

    return Response.json(initialTasks)
}
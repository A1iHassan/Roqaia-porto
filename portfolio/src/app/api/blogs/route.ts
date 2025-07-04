import { NextResponse } from 'next/server';
import supabase from '@/lib/supabaseAdmin'

export async function POST(req: Request) {
    const content = await req.json();
    const { title, body, cover } = content;

    const { data, error } = await supabase
        .from("blogs")
        .insert({ title, body, cover })
        .select()
        .single()

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 201 });
}

export async function GET() {
    const { data, error } = await supabase.from('blogs').select("*");

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
}
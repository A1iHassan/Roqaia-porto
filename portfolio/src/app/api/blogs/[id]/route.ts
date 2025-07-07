import { NextResponse } from "next/server";
import supabase from "@/lib/supabaseAdmin";

type ParamProp = {
    params: {
        id: string
    }
}

export async function PUT(req: Request, { params }: ParamProp) {
    const { id } = params;
    const { title, body, cover } = await req.json()

    const { error } = await supabase
        .from("blogs")
        .update({ title, body, cover })
        .eq("id", id)

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Blog updated successfully' });

}

export async function DELETE(req: Request, { params }: ParamProp) {
    const { id } = params

    const { error } = await supabase.from("blogs").delete().eq("id", id)

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Blog deleted successfully' });

}
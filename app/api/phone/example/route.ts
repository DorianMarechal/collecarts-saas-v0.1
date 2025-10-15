import { NextResponse } from 'next/server'
import { Examples, getExampleNumber, MetadataJson, type CountryCode } from 'libphonenumber-js/core'
import metadataJson from 'libphonenumber-js/metadata.max.json'
import examplesJson from 'libphonenumber-js/examples.mobile.json'

const metadata = metadataJson as unknown as MetadataJson
const examples = examplesJson as unknown as Examples

export async function GET(req: Request) {
  const iso2 = new URL(req.url).searchParams.get('iso2')?.toUpperCase()
  console.log(iso2)
  if (!iso2 || iso2.length !== 2) {
    return NextResponse.json({ error: 'iso2 required' }, { status: 400 })
  }
  try {
    const ex = getExampleNumber(iso2 as CountryCode, examples, metadata)
    return NextResponse.json({ example: ex ? ex.formatNational() : null })
  } catch {
    return NextResponse.json({ example: null })
  }
}

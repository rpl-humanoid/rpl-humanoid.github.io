#!/bin/bash

for f in *.mp4; do
    codec=$(ffprobe -v error -select_streams v:0 -show_entries stream=codec_name \
             -of default=nw=1:nk=1 "$f")

    if [ "$codec" == "hevc" ]; then
        echo "Converting $f (HEVC) to H.264..."

        out="${f%.mp4}_h264.mp4"

        ffmpeg -i "$f" -c:v libx264 -crf 23 -preset veryfast -c:a copy "$out"
    else
        echo "Skipping $f (not HEVC, codec=$codec)"
    fi
done
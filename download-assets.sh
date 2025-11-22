#!/bin/bash
# Script to download APK and IPA from external source during build

echo "Downloading APK and IPA files..."

# Create dist directory if it doesn't exist
mkdir -p dist

# Option 1: Download from Google Drive (if you make it public)
# wget -O dist/app-release.apk "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"

# Option 2: Download from GitHub Release (if repo is public)
# wget -O dist/app-release.apk "https://github.com/DhvaniCast/harborleaf_radio_app/releases/download/v1.0.0/app-release.apk"

# Option 3: Download from Cloud Storage bucket
# gsutil cp gs://YOUR_BUCKET/app-release.apk dist/
# gsutil cp gs://YOUR_BUCKET/Runner.app.ipa dist/

echo "Download complete"

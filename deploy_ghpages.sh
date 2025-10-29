# Build
ng build --configuration production --base-href "/SkillDrill/"

# Navigate to output
cd dist/SkillDrill/browser

# Initialize git (if not already)
git init
git add -A
git commit -m 'deploy'

# Push to gh-pages branch
git push -f git@github.com:BrotherApollo/SkillDrill.git main:gh-pages

# Go back
cd ../../../
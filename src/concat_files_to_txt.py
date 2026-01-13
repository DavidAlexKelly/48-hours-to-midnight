import os
from pathlib import Path

def collect_files_to_text(
    output_file="combined_code.txt",
    extensions=None,
    root_directory=".",
    exclude_dirs=None
):
    """
    Collect all files with specified extensions into a single text file.
    
    Args:
        output_file: Name of the output text file
        extensions: List of file extensions to include (without dots)
        root_directory: Starting directory to search from
        exclude_dirs: List of directory names to exclude (e.g., node_modules, .git)
    """
    if extensions is None:
        extensions = ['tsx', 'ts', 'jsx', 'js', 'html', 'css']
    
    if exclude_dirs is None:
        exclude_dirs = ['node_modules', '.git', '__pycache__', 'venv', 'env', 'dist', 'build']
    
    # Convert to absolute path
    root_path = Path(root_directory).resolve()
    
    # Collect all matching files
    files_found = []
    
    for ext in extensions:
        for file_path in root_path.rglob(f"*.{ext}"):
            # Skip if file is in excluded directory
            if any(excluded in file_path.parts for excluded in exclude_dirs):
                continue
            files_found.append(file_path)
    
    # Sort files by path for consistent output
    files_found.sort()
    
    # Write to output file
    with open(output_file, 'w', encoding='utf-8') as outfile:
        for file_path in files_found:
            # Get relative path from root directory
            try:
                relative_path = file_path.relative_to(root_path)
            except ValueError:
                relative_path = file_path
            
            # Write separator with file path
            outfile.write(f"======{relative_path}======\n")
            
            # Write file contents
            try:
                with open(file_path, 'r', encoding='utf-8') as infile:
                    content = infile.read()
                    outfile.write(content)
                    # Add newline if file doesn't end with one
                    if content and not content.endswith('\n'):
                        outfile.write('\n')
            except Exception as e:
                outfile.write(f"Error reading file: {e}\n")
            
            # Add blank line between files
            outfile.write('\n')
    
    print(f"✓ Combined {len(files_found)} files into '{output_file}'")
    print(f"\nFiles processed:")
    for file_path in files_found:
        try:
            relative_path = file_path.relative_to(root_path)
        except ValueError:
            relative_path = file_path
        print(f"  - {relative_path}")


if __name__ == "__main__":

    collect_files_to_text()
    
    